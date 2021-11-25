import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationStepRoute } from '../../models/step.model';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
  animations: [
    trigger('signatureAnimation', [
      transition('sign => upload', [
        group([
          query(
            ':enter',
            [
              style({ transform: 'scale(0.5)' }),
              animate('0.35s ease-in-out', style({ transform: 'none' })),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition('upload => sign', [
        group([
          query(
            ':enter',
            [
              style({ transform: 'scale(0.5)' }),
              animate('0.3s ease-in-out', style({ transform: 'none' })),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class FinalComponent implements OnInit {
  @ViewChild('signaturePad', { static: false }) signaturePad: any;
  public finalForm!: FormGroup;
  public isSignatureUploaded: boolean = false;
  public tab: string = 'sign';
  public signaturePreview: any;
  public options: any;
  constructor(
    private router: Router,
    private fb: FormBuilder // private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initFinalForm();
    this.options = {
      // minWidth: 5,
      // maxWidth: 10,
      penColor: 'rgb(0, 0, 0)',
      backgroundColor: 'transparent',
    };
  }
  public initFinalForm(): void {
    this.finalForm = this.fb.group({});
  }
  public back(): void {
    this.router.navigate([ApplicationStepRoute.step_four]);
  }
  public continue(): void {
    this.router.navigate([ApplicationStepRoute.final]);
  }

  // public openTermsDialog(): void {
  //   const dialogRef = this.dialog.open(TermsComponent);

  //   dialogRef.componentInstance.event.subscribe((event: boolean) => {
  //     if (event) {
  //       this.continue();
  //     }
  //   });
  // }

  public savePng(): void {
    const data = this.signaturePad.toDataURL();
    this.isSignatureUploaded = true;
    this.signaturePreview = data;
    fetch(data)
      .then((res) => res.blob())
      .then((blob) => {
        // const file = new File([blob], 'File name', { type: 'image/png' });
      });
    // this.clearSignature();
  }

  public clearSignature(): void {
    this.signaturePad.clear();
  }

  public changeTab(tab: string): void {
    this.tab = tab;
  }
}
