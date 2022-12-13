import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public loginForm!: FormGroup;
  private sub: Subscription = new Subscription();
  public isLoggingIn: boolean = false;
  public loginFormSubmitted: boolean = false;
  public error_message: string = '';
  public showPassword: boolean = false;
  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public register(): void {
    this.loginFormSubmitted = true;
  }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.register();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

