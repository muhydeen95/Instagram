import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base/base.component';

@Component({
  selector: 'app-registration',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public isLoggingIn: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(private _base: BaseComponent) { }

  ngOnInit() {
  }

  public submit(): void {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.isLoggingIn = false;
      this._base.openSnackBar('Password reset successfully', 'success');
    }, 3000);
  }

}
