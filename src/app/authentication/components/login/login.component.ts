import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginResponseDTO } from '@auth/models/auth.model';
import { AuthService } from '@auth/services/auth.service';
import { CurrentUserService } from '@core/services/current-user.service';
import { ResponseModel } from 'app/models/response.model';
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
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _auth: AuthService,
    private _current: CurrentUserService,
    public dialog: MatDialog,
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

  public openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '350px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      email: `${this.loginForm.get('email')?.value}`,
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
      this.isLoggingIn = true;
      this._auth.login(this.loginForm.value).subscribe({
        next: (res: ResponseModel<LoginResponseDTO>) => {
          this.isLoggingIn = false;
          this.loginFormSubmitted = true;
          this._current.storeUserCredentials(res?.response);
          this.router.navigate(['dashboard']);
        },
        error: (error: HttpErrorResponse) => {
          this.openModal();
          this.isLoggingIn = false;
          this.loginFormSubmitted = true;
          this.error_message = error?.error?.message;
        },
      });
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
