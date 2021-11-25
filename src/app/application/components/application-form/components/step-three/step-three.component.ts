import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationStepRoute } from '../../models/step.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
})
export class StepThreeComponent implements OnInit {
  public stepThreeForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initStepTwoForm();
  }
  public initStepTwoForm(): void {
    this.stepThreeForm = this.fb.group({});
  }
  public back(): void {
    this.router.navigate([ApplicationStepRoute.step_two]);
  }
  public continue(): void {
    this.router.navigate([ApplicationStepRoute.step_four]);
  }
}
