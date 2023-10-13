import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '@core/base/base/base.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private sub: Subscription = new Subscription();
  public isLoggingIn: boolean = false;
  public loginFormSubmitted: boolean = false;
  public error_message: string = '';
  public showPassword: boolean = false;
  public count: number = 0;

  constructor(
    private fb: FormBuilder,
    private _base: BaseComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }


  public login(): void {
    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      this.isLoggingIn = true;
      this._base.openSnackBar('Login Successsful!!!');
      this.router.navigate(['/dashboard']);
    }
  }
  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.login();
    }
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
