import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardDialogComponent } from 'app/dashboard/dialogs/dashboard-dialog/dashboard-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Subscription } from 'rxjs';
import {
  Dashboard,
  DashboardResponseDTO,
  UploadDocDTO,
} from 'app/dashboard/models/dashboard.model';
import { UploadDocumentComponent } from 'app/dashboard/dialogs/upload-document/upload-document.component';
import { TrackDocumentComponent } from 'app/dashboard/dialogs/track-document/track-document.component';
import { DocumentService } from '../../../documents/services/document.service';
import {
  DocumentResponse,
  DocumentSearchDTO,
  DefaultDocumentSearchDTO,
} from '../../../documents/models/documents.model';
import {
  InitialSearchDTO,
  SearchDTO,
  ApplicationResponseDTO,
  ResponseModel,
} from '../../../models/response.model';
import { LcApplicationService } from '../../../application/services/lc-application.service';
import { Router } from '@angular/router';
import { DashboardService } from 'app/dashboard/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public isDocumentFetching: boolean = true;
  public applicationLoading: boolean = true;
  public isFetchingDashboard: boolean = true;
  public dashboardMetrics!: DashboardResponseDTO;
  public data: DocumentResponse[] = [];
  public filterableData: DocumentResponse[] = [];
  public applicationData: ApplicationResponseDTO[] = [];
  public applicationFilterableData: ApplicationResponseDTO[] = [];

  constructor(
    public dialog: MatDialog,
    private _docService: DocumentService,
    private _applicationService: LcApplicationService,
    private _dashboard: DashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDashboard();
    this.getDocument(DefaultDocumentSearchDTO);
    this.getApplications(InitialSearchDTO);
  }

  public getDashboard(): void {
    this._dashboard.getCustomerDashboard().subscribe({
      next: (res: ResponseModel<DashboardResponseDTO>) => {
        this.isFetchingDashboard = false;
        console.log(res);
        this.dashboardMetrics = res.response;
      },
      error: (error: ResponseModel<any>) => {
        this.isFetchingDashboard = false;
      },
    });
  }
  public getDocument(query: DocumentSearchDTO): void {
    this._docService.getDocument(query).subscribe({
      next: (res: any) => {
        this.isDocumentFetching = false;
        this.data = res.response.result;
        this.filterableData = this.data;
      },
      error: (error: ResponseModel<null>) => {
        this.isDocumentFetching = false;
        console.log(error);
      },
    });
  }

  public getApplications(query: SearchDTO): void {
    this._applicationService.searchAllLcApplications(query).subscribe({
      next: (res: any) => {
        this.applicationLoading = false;
        this.applicationData = res.response.result;
        this.applicationFilterableData = this.applicationData;
      },
      error: (error: ResponseModel<null>) => {
        this.applicationLoading = false;
        console.log(error);
      },
    });
  }
  public openDialog(
    payload: { isEditing?: boolean; editObj?: any } | any
  ): void {
    let object: DialogModel<Dashboard> = payload;
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      data: object,
    });

    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<Dashboard>) => {}
    );
  }

  public openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDocumentComponent);

    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<UploadDocDTO>) => {}
    );
  }

  public openTrackDialog(): void {
    const dialogRef = this.dialog.open(TrackDocumentComponent);

    dialogRef.componentInstance.searchAction.subscribe(
      (event: DialogModel<UploadDocDTO>) => {}
    );
  }

  public viewDocument(documentId: number): void {
    this.router.navigate(['documents/status', documentId]);
  }
  public viewLcApplication(lcApplicationId: number): void {
    this.router.navigate(['application/detail', lcApplicationId]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
