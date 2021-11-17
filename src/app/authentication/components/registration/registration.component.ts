import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/base/base/base.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public isLoggingIn: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(private _base: BaseComponent) { }

  ngOnInit() {
  }

  public register(): void {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.isLoggingIn = false;
      this._base.openSnackBar('Registration successfully', 'success');
    }, 3000);
  }

}
