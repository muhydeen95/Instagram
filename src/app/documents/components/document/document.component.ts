import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { DashboardDialogComponent } from 'app/dashboard/dialogs/dashboard-dialog/dashboard-dialog.component';
import { UploadDocumentComponent } from 'app/dashboard/dialogs/upload-document/upload-document.component';
import { UploadDocDTO } from 'app/dashboard/models/dashboard.model';
import { Subscription } from 'rxjs';
import { FilterComponent } from '../../dialogs/filter/filter.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  private sub: Subscription = new Subscription();
  public loading: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

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

    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<any>) => {}
    );
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
