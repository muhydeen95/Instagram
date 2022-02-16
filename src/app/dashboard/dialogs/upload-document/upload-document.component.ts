import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { DocTypeDTO, UploadDocDTO } from 'app/dashboard/models/dashboard.model';
import { DashboardService } from 'app/dashboard/services/dashboard.service';
import {
  InitialSearchDTO,
  ResponseModel,
  SearchDTO,
} from 'app/models/response.model';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss'],
})
export class UploadDocumentComponent implements OnInit {
  @ViewChild('close') close!: ElementRef;
  @Output() event: EventEmitter<{
    editObj: UploadDocDTO;
    isEditing?: boolean;
  }> = new EventEmitter<{ editObj: UploadDocDTO; isEditing?: boolean }>();
  public AcceptedFileTypes: string =
    'image/png,image/jpeg,image/jpg,application/PDF,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/plain,application/msword,text/csv,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  public fileNames: Array<string> = [];
  public uploadForm!: FormGroup;
  public isLoading: boolean = false;
  public uploadFormSubmitted: boolean = false;
  public error_message: string = '';
  public showPassword: boolean = false;
  public gettingDocTypes: boolean = true;
  public searchQuery: SearchDTO = InitialSearchDTO;
  public gettingDocTypesFailed: boolean = false;
  public docTypes: Array<DocTypeDTO> = [];

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel<UploadDocDTO>
  ) {}

  ngOnInit(): void {
    this.initUploadForm();
    this.getDocumentTypes();
  }

  public getDocumentTypes(): void {
    this.gettingDocTypes = true;
    this.dashboardService.getDocumentTypesRequest(this.searchQuery).subscribe({
      next: (res: ResponseModel<any>) => {
        this.gettingDocTypes = false;
        this.docTypes = res.response['result'];
      },
      error: (error: HttpErrorResponse) => {
        this.gettingDocTypes = false;
        this.gettingDocTypesFailed = true;
        this.error_message = error?.error?.message;
      },
    });
  }

  initUploadForm() {
    this.uploadForm = this.fb.group({
      DocumentType: ['', Validators.required],
      SubjectMatter: ['', Validators.required],
      Files: ['', Validators.required],
    });
  }

  public uploadDocument(): void {
    this.uploadFormSubmitted = true;
    if (this.uploadForm.valid) {
      this.isLoading = true;
      this.dashboardService
        .uploadDocumentRequest(this.uploadForm.value)
        .subscribe({
          next: (res: ResponseModel<UploadDocDTO>) => {
            this.isLoading = false;
            this.uploadFormSubmitted = false;
            this.event.emit({
              editObj: this.uploadForm.value,
            });
            this.close.nativeElement.click();
          },
          error: (error: HttpErrorResponse) => {
            this.isLoading = false;
            this.uploadFormSubmitted = true;
            this.error_message = error?.error?.message;
          },
        });
    }
  }

  public onFileDropped(e: any, mode?: string) {
    const files = [...e.target.files];
    if (files.length > 0) {
      this.uploadForm.get('Files')?.setValue(files);
      this.fileNames = files.map((element) => element.name);
    }
  }
}
