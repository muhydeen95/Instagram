import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TermsComponent } from '../../dialogs/terms/terms.component';
import { ApplicationStepRoute } from '../../models/step.model';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss'],
})
export class StepFourComponent implements OnInit {
  public stepFourForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initStepTwoForm();
  }
  public initStepTwoForm(): void {
    this.stepFourForm = this.fb.group({});
  }
  public back(): void {
    this.router.navigate([ApplicationStepRoute.step_three]);
  }
  public continue(): void {
    this.router.navigate([ApplicationStepRoute.final]);
  }

  public openTermsDialog(): void {
    const dialogRef = this.dialog.open(TermsComponent);

    dialogRef.componentInstance.event.subscribe((event: boolean) => {
      if (event) {
        this.continue();
      }
    });
  }
}
