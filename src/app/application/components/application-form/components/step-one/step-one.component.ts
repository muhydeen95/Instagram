import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationStepRoute } from '../../models/step.model';
import { LCType } from '../../models/types.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
  public stepOneForm!: FormGroup;
  public types: LCType[] = [{ name: 'New type', id: 1 }];
  public isFetchingTypes: boolean = false;
  public isFetchingTypesFailed: boolean = false;
  public isLoading: boolean = false;
  public isFetchingUssances: boolean = false;
  public isFetchingUssancesFailed: boolean = false;
  public stepOneFormSubmitted: boolean = false;
  constructor(
    private _location: Location,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initStepOneForm();
  }

  public getTypes(): void {
    this.types.push({ id: Math.random(), name: `user${Math.random()}` });
  }
  public initStepOneForm(): void {
    this.stepOneForm = this.fb.group({
      lCApplicationDate: ['', Validators.required],
      applicantName: ['', Validators.required],
      applicantAddress: ['', Validators.required],
      beneficiaryName: ['', Validators.required],
      beneficiaryPhoneNumber: ['', Validators.required],
      beneficiaryAddress: ['', Validators.required],
      type: [null, Validators.required],
      ussance: [null, Validators.required],
      cFR: ['', Validators.required],
      sight: [null, Validators.required],
      location: ['', Validators.required],
    });
  }
  public back(): void {
    this._location.back();
  }

  public continue(): void {
    this.stepOneFormSubmitted = true;
    if (this.stepOneForm.valid) {
      this.isLoading = true;
      const payload = this.stepOneForm.value;
      console.log(payload);
    }
    this.router.navigate([ApplicationStepRoute.step_two]);
  }
}
