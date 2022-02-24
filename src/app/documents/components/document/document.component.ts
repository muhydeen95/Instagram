import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogModel } from '@shared/components/models/dialog.model';
import { DashboardDialogComponent } from 'app/dashboard/dialogs/dashboard-dialog/dashboard-dialog.component';
import { UploadDocumentComponent } from 'app/dashboard/dialogs/upload-document/upload-document.component';
import { UploadDocDTO } from 'app/dashboard/models/dashboard.model';
import { Subscription } from 'rxjs';
import { ResponseModel } from '../../../models/response.model';
import { FilterComponent } from '../../dialogs/filter/filter.component';
import {
  DefaultDocumentSearchDTO,
  DocumentResponse,
  DocumentSearchDTO,
} from '../../models/documents.model';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  private sub: Subscription = new Subscription();
  public documentLoading: boolean = true;
  public is_initial: boolean = true;
  public searchTerm: string = '';
  filterableData: DocumentResponse[] = [];
  documentStatus: string = '0';
  data: DocumentResponse[] = [];
  constructor(
    public dialog: MatDialog,
    private _docService: DocumentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const param: any = this.activatedRoute.queryParams;
    this.documentStatus = param['value'].query;
    this.documentStatus
      ? (() => {
          this.getDocument({ TreatmentStatus: this.documentStatus });
        })()
      : this.getDocument(DefaultDocumentSearchDTO);
  }

  filterDocument(query: string): void {
    this.getDocument({ TreatmentStatus: query });
  }

  getDocument(
    query: Partial<DocumentSearchDTO>,
    isSearching: boolean = false
  ): void {
    this.documentLoading = true;
    this._docService.getDocument(query).subscribe({
      next: (res: any) => {
        this.documentLoading = false;
        this.is_initial = !isSearching;
        this.data = res.response.result;
        this.filterableData = this.data;
      },
      error: (error: ResponseModel<null>) => {
        this.documentLoading = false;
        console.log(error);
      },
    });
  }

  public searchQueryAction(searchQuery: string): void {
    this.searchTerm = searchQuery.toLocaleLowerCase().trim();
  }
  searchDocuments(): void {
    this.getDocument({ Search: this.searchTerm }, true);
  }

  public openDialog(
    payload: { isEditing?: boolean; editObj?: any } | any
  ): void {
    let object: DialogModel<any> = payload;
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      data: object,
    });

    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<any>) => {}
    );
  }

  public filterAction(): void {
    const dialogRef = this.dialog.open(FilterComponent);
    dialogRef.componentInstance.event.subscribe((event: DialogModel<any>) => {
      this.getDocument({ CustomerFileSubmissionDate: event.toString() }, true);
    });
  }

  public openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDocumentComponent);

    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<UploadDocDTO>) => {}
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
