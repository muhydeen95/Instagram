import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardDialogComponent } from 'app/dashboard/dialogs/dashboard-dialog/dashboard-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Subscription } from 'rxjs';
import { Dashboard, UploadDocDTO } from 'app/dashboard/models/dashboard.model';
import { UploadDocumentComponent } from 'app/dashboard/dialogs/upload-document/upload-document.component';
import { TrackDocumentComponent } from 'app/dashboard/dialogs/track-document/track-document.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public isFetchingDashboard: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
