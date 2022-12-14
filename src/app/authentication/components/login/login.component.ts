import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BaseComponent } from '@core/base/base/base.component';
import { User } from '@core/models/users.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActionDialogComponent } from './dialogs/action-dialog/action-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private sub: Subscription = new Subscription();
  public isLoggingIn: boolean = false;
  public loginFormSubmitted: boolean = false;
  public error_message: string = '';
  public showPassword: boolean = false;
  public user = User;
  public count: number = 0;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _base: BaseComponent
  ) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public openModal(count: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '350px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      count: count,
    };
    const dialogRef = this.dialog.open(
      ActionDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {});
  }

  public login(): void {
    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem('attempt', JSON.stringify(this.count++));
      let attempt = localStorage.getItem('attempt');
      this.isLoggingIn = true;
      const payload = this.loginForm.value;
      if(
        payload.email == this.user.email &&
        payload.password == this.user.password
      ) {
        this.isLoggingIn = false;
        this._base.openSnackBar('Login Successsful!!!');
        this.loginForm.reset();
      } else if(Number(attempt) == 3) {
        this.isLoggingIn = false;
        this.openModal(Number(attempt));
      } else if(Number(attempt) > 3) {
        this._base.openSnackBar('Your account has been blocked due to so many attempt', 'error');
      } else {
        this.isLoggingIn = false;
        this.openModal(this.count);
      }
    }
  }
  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.login();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
