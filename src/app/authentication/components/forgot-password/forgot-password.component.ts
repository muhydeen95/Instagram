import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPassswordDTO } from '@auth/models/auth.model';
import { AuthService } from '@auth/services/auth.service';
// import { BaseComponent } from '@core/base/base/base.component';
import { ResponseModel } from 'app/models/response.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public sub: Subscription = new Subscription()
  public forgotPasswordForm!: FormGroup;
  public forgotPasswordFormSubmitted: boolean = false;
  public isLoggingIn: boolean = false;
  public error_message: string = '';
  public isError: boolean = false

  constructor(
    // private _base: BaseComponent,
    private fb: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this.initForgotPasswordForm();
  }

  initForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  public submit(): void {
    this.forgotPasswordFormSubmitted = true;
    if (this.forgotPasswordForm.valid) {
      this.isLoggingIn = true;
      this._auth.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: (res: ResponseModel<ForgotPassswordDTO>) => {
          this.isLoggingIn = false;
          this.forgotPasswordFormSubmitted = true;
          this._router.navigate(['authentication/reset-password']);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoggingIn = false;
          this.forgotPasswordFormSubmitted = true;
          this.isError = true;
          this.error_message = error?.error?.message;
        },
      });
    }
  }
  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.submit();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
