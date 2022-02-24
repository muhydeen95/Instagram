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
import { BaseComponent } from '@core/base/base/base.component';
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
  @Output() isUploaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  public AcceptedFileTypes: string = 'application/PDF';
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
  public files: File[] = [];
  constructor(
    private fb: FormBuilder,
    private _base: BaseComponent,
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
            this.isUploaded.emit(true);
            this.close.nativeElement.click();
            this._base.openSnackBar(
              'Document uploaded successfully',
              'success'
            );
          },
          error: (error: HttpErrorResponse) => {
            this.isLoading = false;
            this.uploadFormSubmitted = true;
            this.error_message = error?.error?.message;
          },
        });
    }
  }

  public onFileDropped(event: any) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.files.includes(event.target.files[i])
          ? null
          : this.files.push(event.target.files[i]);
      }
      this.uploadForm.patchValue({
        Files: this.files,
      });
    }

    // const files = [...e.target.files];
    // if (files.length > 0) {
    //   this.uploadForm.get('Files')?.setValue(files);
    //   this.fileNames = files.map((element) => element.name);
    // }
  }
  public removeFile(index: number): void {
    this.files.splice(index, 1);
    this.uploadForm.patchValue({
      Files: this.files,
    });
  }
}
