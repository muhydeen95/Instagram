import { Output, EventEmitter } from '@angular/core';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('close') close!: ElementRef;
  public sub: Subscription = new Subscription();
  public otpForm!: FormGroup;
  public isLoading: boolean = false;

  @Output() event: EventEmitter<{
    editObject?: any;
    isEditing: boolean;
  }> = new EventEmitter<{ editObject?: any; isEditing: boolean }>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogModel<any>,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initotpForm();
  }

  public initotpForm() {
    this.otpForm = this.fb.group({
      otp: ['', Validators.required],
    })
  }

  public submit() {
    this.close.nativeElement.click();
    this.router.navigate(['/authentication/reset-password']);
  }

}
