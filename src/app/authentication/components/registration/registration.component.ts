import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BaseComponent } from '@core/base/base/base.component';
import { RegistrationDialogComponent } from './dialogs/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isLoggingIn: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(
    private _base: BaseComponent, 
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registrationForm = this.fb.group({
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        phoneNumber1: ['', Validators.required],
        phoneNumber2: [''],
        email: ['', Validators.required],
        altEmail: [''],
        organizationName: [''],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
    })
  }

  public register(): void {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.isLoggingIn = false;
      this._base.openSnackBar('Registration successfully', 'success');
      this.openModal();
    }, 3000);
  }

  public openModal():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "365px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      email: "firstname.lastname@domain.com",
      counter: "00:05",
    }
    const dialogRef = this.dialog.open(RegistrationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
