import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationStepRoute } from '../../models/step.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  public stepTwoForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initStepTwoForm();
  }
  public initStepTwoForm(): void {
    this.stepTwoForm = this.fb.group({});
  }
  public back(): void {
    this.router.navigate([ApplicationStepRoute.step_one]);
  }
  public continue(): void {
    this.router.navigate([ApplicationStepRoute.step_three]);
  }
}
