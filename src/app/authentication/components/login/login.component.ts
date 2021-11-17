import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoggingIn: boolean = false;
  public showPassword: boolean = false;
  constructor(private _base: BaseComponent) {}

  ngOnInit(): void {}

  public login(): void {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.isLoggingIn = false;
      this._base.openSnackBar('Logged in successfully', 'success');
    }, 3000);
  }
}
