import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from 'app/profile/dialogs/change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isLoading: boolean = false;
  public updateProfileForm!: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.initUpdateProfileForm();
  }

  initUpdateProfileForm() {
    this.updateProfileForm = this.fb.group({
        firstName: [''],
        middleName: [''],
        lastName: [''],
        phoneNumber1: [''],
        phoneNumber2: [''],
        email: [''],
        altEmail: [''],
        organizationName: ['']
    })
  }

  public openModal():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "480px";
    dialogConfig.width = "700px";
    dialogConfig.data = {
      email: "firstname.lastname@domain.com",
      counter: "00:05",
    }
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submit() {

  }

}
