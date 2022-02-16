import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BaseComponent } from '@core/base/base/base.component';
// import { CurrentUserService } from '@core/services/current-user.service';
import { ResponseModel } from 'app/models/response.model';
import { ChangePasswordDialogComponent } from 'app/profile/dialogs/change-password-dialog/change-password-dialog.component';
import { Profile } from 'app/profile/models/user-profile.model';
import { ProfileService } from 'app/profile/services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private sub: Subscription = new Subscription();
  public isLoading: boolean = false;
  public isFetchingProfile: boolean = false;
  public updateProfileForm!: FormGroup;
  public profile!: Profile;
  public error_message: string = '';
  public isError: boolean = false;

  constructor(
    public dialog: MatDialog, 
    private fb: FormBuilder,
    private _profile: ProfileService,
    // private _current: CurrentUserService,
    private _base: BaseComponent
  ) { }

  ngOnInit() {
    this.getUserProfile();
    this.initUpdateProfileForm();
  }

  initUpdateProfileForm() {
    this.updateProfileForm = this.fb.group({
        firstName: [this.profile?.firstName ? this.profile?.firstName  : '' ],
        middleName: [this.profile?.middleName ? this.profile?.middleName  : ''],
        lastName: [this.profile?.lastName ? this.profile?.lastName  : ''],
        phoneNumber: [this.profile?.phoneNumber ? this.profile?.phoneNumber  : ''],
        alternatePhoneNumber: [this.profile?.alternatePhoneNumber ? this.profile?.alternatePhoneNumber  : ''],
        email: [this.profile?.email ? this.profile?.email  : ''],
        AlternateEmail: [this.profile?.alternateEmail ? this.profile?.alternateEmail  : ''],
        organizationName: [this.profile?.organizationName ? this.profile?.organizationName  : '']
    })
  }

  public getUserProfile(): void {
    this.isFetchingProfile = true;
    this.sub.add(
      this._profile.getProfile().subscribe({
        next: (res: any) => {
          // console.log(res)
          this.isFetchingProfile = false;
          this.profile = res?.response;
          this.initUpdateProfileForm()
        },
        error: (error: ResponseModel<null>) => {
          this.isFetchingProfile = false;
          console.log(error);
        },
      })
    );
  }

  getInitials() {
      return (
        this.profile.firstName?.charAt(0).toUpperCase() +
        this.profile.lastName?.charAt(0).toUpperCase()
      );
  }

  public openModal():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "480px";
    dialogConfig.width = "700px";
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  public submit() {
    this.isLoading = true;
    const payload = this.updateProfileForm.value
    this.sub.add(
      this._profile.updateProfile(payload).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this._base.openSnackBar(
            'Great...!!!, Your action was successful',
            'success'
          );
          this.profile = payload;
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.isError = true;
          console.log(error);
          this.error_message = error?.error?.Id[0];
        },
      })
    );
  }

}
