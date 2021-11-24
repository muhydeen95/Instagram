import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  constructor(
    public dialog: MatDialog, 
    private fb: FormBuilder,
    private _profile: ProfileService
  ) { }

  ngOnInit() {
    this.initUpdateProfileForm();
  }

  initUpdateProfileForm() {
    this.updateProfileForm = this.fb.group({
        firstName: [this.profile?.firstName ? this.profile?.firstName  : '' ],
        middleName: [this.profile?.middleName ? this.profile?.middleName  : ''],
        lastName: [this.profile?.lastName ? this.profile?.lastName  : ''],
        phoneNumber1: [this.profile?.phoneNumber1 ? this.profile?.phoneNumber1  : ''],
        phoneNumber2: [this.profile?.phoneNumber2 ? this.profile?.phoneNumber2  : ''],
        email: [this.profile?.email ? this.profile?.email  : ''],
        altEmail: [this.profile?.altEmail ? this.profile?.altEmail  : ''],
        organizationName: [this.profile?.organizationName ? this.profile?.organizationName  : '']
    })
  }

  public getUserProfile(): void {
    this.isFetchingProfile = true;
    this.sub.add(
      this._profile.getProfile(this.profile).subscribe({
        next: (res: any) => {
          this.isFetchingProfile = false;
          this.profile = res?.response;
        },
        error: (error: ResponseModel<null>) => {
          this.isFetchingProfile = false;
          console.log(error);
        },
      })
    );
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
      // console.log(`Dialog result: ${result}`);
    });
  }

  public submit() {
    this.isLoading = true;
  }

}
