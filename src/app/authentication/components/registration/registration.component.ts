import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registerForm!: FormGroup;
  private sub: Subscription = new Subscription();
  public isLoggingIn: boolean = false;
  public registerFormSubmitted: boolean = false;
  public error_message: string = '';
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z]).{8,50}$/)]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,30}$/)
        ]
      ],
      confirmPassword: ['', Validators.required],
    }, { validators: [this.passwordMatchValidator] });
  }

  passwordMatchValidator(f: FormGroup) {
    return f.get('password')?.value === f.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  public register(): void {
    this.registerFormSubmitted = true;
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

