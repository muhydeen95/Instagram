import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@core/base/base/base.component';
import { ResetDialogComponent } from './reset-dialog/reset-dialog.component';

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
  public token: string = '';
  public email: string = '';

  constructor(
    private _base: BaseComponent,
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
    this.initResetPasswordForm();
  }

  public initResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      Password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/)
        ]
      ],
      confirmPassword: ['', Validators.required],
    }, { validators: [this.passwordMatchValidator] })
  }

  passwordMatchValidator(f: FormGroup) {
    return f.get('Password')?.value === f.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.submit();
    }
  }

  public openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '365px';
    dialogConfig.width = '600px';
    const dialogRef = this.dialog.open(
      ResetDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {});
  }

  public submit(): void {
    const payload = this.resetPasswordForm.value;
    payload.token = this.token;
    payload.email = this.email;
    this.passwordFormSubmitted = true;
    if(!this.resetPasswordForm?.valid) {
      this.error_message = 'Please fill all required field!'
    }
    if (this.resetPasswordForm.valid) {
      this.isLoading = true;
      this._base.openSnackBar('Password reset successfully!!!');
      this._router.navigate(['/authentication/login']);
    }
  }

}
