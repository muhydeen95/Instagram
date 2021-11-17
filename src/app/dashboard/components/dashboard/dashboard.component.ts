import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardDialogComponent } from 'app/dashboard/dialogs/dashboard-dialog/dashboard-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Dashboard } from 'app/dashboard/models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public show: boolean = false;
  public hour!: number;
  public unique_name!: 'Ali Musa';
  public isFetchingDashboard: boolean = false;

  constructor(public dialog: MatDialog) {
    this.sub.add(
      timer(0, 1000)
        .pipe(
          map(() => new Date().getHours()),
          share()
        )
        .subscribe((time) => {
          this.hour = time;
        })
    );
    // this.unique_name = JSON.parse(
    //   localStorage.getItem('user_credential') as string
    // ).unique_name;
  }

  ngOnInit() {
    console.log('dashboard');
  }

  public openDialog(
    payload: { isEditing?: boolean; editObj?: any } | any
  ): void {
    let object: DialogModel<Dashboard> = payload;
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      data: object,
    });

    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<Dashboard>) => {
        console.log(event);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
