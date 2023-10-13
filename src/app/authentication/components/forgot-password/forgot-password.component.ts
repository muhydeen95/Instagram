import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModel } from '@shared/components/models/dialog.model';

@Component({
  selector: 'app-registration',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public sub: Subscription = new Subscription();
  public countDown: Subscription = new Subscription();
  public forgotPasswordForm!: FormGroup;
  public forgotPasswordFormSubmitted: boolean = false;
  public isLoggingIn: boolean = false;
  public error_message: string = '';
  public isError: boolean = false;
  public counter = 10;
  public tick = 1000;
  public sending: boolean = false;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForgotPasswordForm();
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }

  initForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]]
    })
  }


  public openDialog(
    payload: { isEditing?: boolean; editObject?: any } | any
  ): void {
    let object: DialogModel<any> = payload;
    const dialogRef = this.dialog.open(DialogComponent, {
      data: object,
      panelClass: 'modal-width'
    });
    dialogRef.componentInstance.event.subscribe(
      (event: DialogModel<any>) => {

      }
    );
  }

  public submit(): void {
    // this.forgotPasswordFormSubmitted = true;
    if (this.forgotPasswordForm.valid) {
      this.openDialog(false);
    }
  }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.submit();
    }
  }

  back() {
    this.router.navigate(['/authentication/login'])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
