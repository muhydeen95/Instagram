import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '@core/base/base/base.component';

@Component({
  selector: 'app-registration',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isLoggingIn: boolean = false;

  constructor(
    private _base: BaseComponent,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public submit(): void {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.isLoggingIn = false;
      this._base.openSnackBar('Check your email for reset link', 'success');
    }, 3000);
    this._router.navigate(['/authentication/reset-password'])
  }

}
