import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { DashboardDialogComponent } from 'app/dashboard/dialogs/dashboard-dialog/dashboard-dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { FilterComponent } from 'app/documents/dialogs/filter/filter.component';
import { Subscription } from 'rxjs';
import {
  InitialSearchDTO,
  pageSizeOptionsDTO,
  PaginationResponse,
  ResponseModel,
  SearchDTO,
} from 'app/models/response.model';
import { LcApplicationService } from 'app/application/services/lc-application.service';
import { Router } from '@angular/router';
import { LCApplicationDTO } from '../application-form/models/types.model';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  private sub: Subscription = new Subscription();
  public isFetchingLcApplications: boolean = false;
  public loading: boolean = false;
  public btnName: string = 'New Application';
  public isInitialRequest: boolean = true;
  public date: string = new Date().toISOString();
  public lcAplications: LCApplicationDTO[] = [];
  public searchQuery: SearchDTO = { ...InitialSearchDTO, search: '' };
  public paginatedResponse: PaginationResponse<any[]> = new PaginationResponse<
    any[]
  >();
  public pageSizeOptions: number[] = pageSizeOptionsDTO;
  constructor(
    public dialog: MatDialog,
    private _lc: LcApplicationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLcApplicationss(true);
  }

  public getLcApplicationss(
    initial: boolean,
    isPagination?: boolean,
    pageEvent?: PageEvent
  ): void {
    if (pageEvent) {
      this.searchQuery = {
        search: this.searchQuery.search,
        pageNumber: pageEvent?.pageIndex + 1,
        pageSize: pageEvent?.pageSize,
        lCApplicationDate: this.date,
      };
    }
    initial ? (this.isInitialRequest = true) : (this.isInitialRequest = false);
    this.isFetchingLcApplications = true;
    this.sub.add(
      this._lc.searchAllLcApplications(this.searchQuery).subscribe({
        next: (res: ResponseModel<PaginationResponse<any[]>>) => {
          console.log(res);
          this.isFetchingLcApplications = false;
          this.paginatedResponse = res?.response;
          this.lcAplications = this.paginatedResponse.result;
          this.searchQuery.pageNumber = this.paginatedResponse.pageNumber;
          this.searchQuery.pageSize = this.paginatedResponse.pageSize;
        },
        error: (error: ResponseModel<null>) => {
          this.isFetchingLcApplications = false;
          console.log(error);
        },
      })
    );
  }

  public openDialog(
    payload: { isEditing?: boolean; editObj?: any } | any
  ): void {
    let object: DialogModel<any> = payload;
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      data: object,
    });

    dialogRef.componentInstance.event.subscribe((event: DialogModel<any>) => {
      console.log(event);
    });
  }

  public filterAction(): void {
    const dialogRef = this.dialog.open(FilterComponent);
    dialogRef.componentInstance.event.subscribe((event: string) => {
      this.date = event;
    });
  }

  public goToNewApplication(): void {
    this.router.navigate(['application/form/step-one']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
