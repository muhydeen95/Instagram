// import { HttpErrorResponse } from '@angular/common/http';
import { 
  Component,
  Input,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ResponseModel } from 'app/models/response.model';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss'],
})
export class ChangePasswordDialogComponent implements OnInit {
  @Input() btnAction: boolean = false;
  public changePasswordForm!: FormGroup;
  public showCurrentPassword: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initChangePasswordForm();
   }

  public initChangePasswordForm() {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
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
    this.isLoading = true;
  }
}
