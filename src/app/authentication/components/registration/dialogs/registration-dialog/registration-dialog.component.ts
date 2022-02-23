// import { HttpErrorResponse } from '@angular/common/http';
import { 
  Component,
  Input,
  Inject,
  OnInit,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timer, Subscription } from 'rxjs';
// import { ResponseModel } from 'app/models/response.model';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss'],
})
export class RegistrationDialogComponent implements OnInit, OnDestroy {
  @Input() btnAction: boolean = false;
  public countDown: Subscription = new Subscription();
  public counter = 10;
  public tick = 1000;

  constructor(
    public dialogRef: MatDialogRef<RegistrationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) { }

  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
   }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.submit();
    }
  }

  public submit(): void {
    this.counter = 10;
  }

  ngOnDestroy(){
    this.countDown.unsubscribe();
  }
}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
