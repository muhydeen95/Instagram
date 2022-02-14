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
  public presentations: string[] = [
    '2 Original Combined Certificate of Value and Origin (CCVO on form C16 and 3 copies)',
    '3 Original commercial invoice and 2 copies',
    '2 Original parking list and 3 copies',
    '2 Original manufacturers certificate of production stating standards adopted',
    '1 original laboratory test certificate',
    'Certificate issued by the beneficiary stating that one set of documents has been forwarded to Fidelity Bank by courier not later than 21 days after shipment',
    '2/3 original (clean/shipped on board) ocean bill of lading and 3 copies (Non-negotiabe) issued to the order and marked freight prepaid endorse to Fidelitybank PLC.',
  ];
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
