import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordDTO } from '@auth/models/auth.model';
import { AuthService } from '@auth/services/auth.service';
import { BaseComponent } from '@core/base/base/base.component';
import { ResponseModel } from 'app/models/response.model';

@Component({
  selector: 'app-registration',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm!: FormGroup;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public isLoading: boolean = false;
  public passwordFormSubmitted: boolean = false;
  public isError: boolean = false;
  public error_message: string = '';

  constructor(
    private _base: BaseComponent,
    private fb: FormBuilder,
    private _auth: AuthService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.initResetPasswordForm();
  }

  public initResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      password: [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/),
      ],
      confirmPassword: ['', Validators.required],
    })
  }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.submit();
    }
  }

  public submit(): void {
    const payload = this.resetPasswordForm.value;
    this.passwordFormSubmitted = true;
    if(payload.NewPassword != payload.confirmPassword) {
      this.isError = true;
      this.error_message = "New password and confirm password must match"
    }
    if (this.resetPasswordForm.valid) {
      this.isLoading = true;
      // const payload = this.changePasswordForm.value;
      this._auth.resetPassword(payload).subscribe({
        next: (res: ResponseModel<ResetPasswordDTO>) => {
          console.log(res)
          this.isLoading = false;
          this.passwordFormSubmitted = false;
          this._base.openSnackBar(
            'Great...!!!, Your action was successful',
            'success'
          );
          this._router.navigate(['authentication/login'])
        },
        error: (error: HttpErrorResponse) => {
          console.log(error, error.error);
          this.isLoading = false;
          this.passwordFormSubmitted = false;
          this.isError = true;
          this.error_message = error?.error.message;
        },
      });
    }
  }

}
