import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { RegisterRequestDTO } from '@auth/models/auth.model';
// import { CurrentUserService } from '@core/services/current-user.service';
import { Subscription } from 'rxjs';
import { RegistrationDialogComponent } from './dialogs/registration-dialog/registration-dialog.component';
import { ResponseModel } from 'app/models/response.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isLoggingIn: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public loginForm!: FormGroup;
  private sub: Subscription = new Subscription();
  public isSiginingUp: boolean = false;
  public registerFormSubmitted: boolean = false;
  public error_message: string = '';

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    // private router: Router,
    private _auth: AuthService
  ) // private _current: CurrentUserService
  {}

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registrationForm = this.fb.group(
      {
        FirstName: ['', Validators.required],
        MiddleName: [''],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        AlternatePhoneNumber: [''],
        Email: ['', [Validators.required, Validators.email]],
        AlternateEmail: ['', Validators.email],
        OrganizationName: [''],
        Password: ['', 
          [
            Validators.required,
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/),
          ]
        ],
        ConfirmPassword: ['', [Validators.required]],
      },
      { validators: [this.passwordMatchValidator] }
    );
  }

  passwordMatchValidator(f: FormGroup) {
    return f.get('Password')?.value === f.get('ConfirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  public register(): void {
    this.registerFormSubmitted = true;
    if(
        this.registrationForm.get('Password')?.value != 
        this.registrationForm.get('confirmPassword')?.value
      ) {
      this.error_message = 'Password must match'
    }
    if(!this.registrationForm.get('Password')?.valid) {
      this.error_message = 'Password must container at least 8 character with one uppercase, one lowercase and one number'
    }
    if (this.registrationForm.valid) {
      this.isSiginingUp = true;
      this._auth.register(this.registrationForm.value).subscribe({
        next: (res: ResponseModel<RegisterRequestDTO>) => {
          this.isSiginingUp = false;
          this.registerFormSubmitted = true;
          // this.router.navigate(['authentication/login']);
          this.openModal();
        },
        error: (error: HttpErrorResponse) => {
          this.isSiginingUp = false;
          this.registerFormSubmitted = true;
          this.error_message = error?.error?.message;
        },
      });
    }
  }
  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.register();
    }
  }

  public openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '365px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      email: `${this.registrationForm.get('email')?.value}`,
      counter: '00:05',
    };
    const dialogRef = this.dialog.open(
      RegistrationDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
