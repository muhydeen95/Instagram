import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { UploadDocDTO } from 'app/dashboard/models/dashboard.model';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss'],
})
export class UploadDocumentComponent implements OnInit {
  @Output() event: EventEmitter<{
    editObj: UploadDocDTO;
    isEditing?: boolean;
  }> = new EventEmitter<{ editObj: UploadDocDTO; isEditing?: boolean }>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogModel<UploadDocDTO>
  ) {}

  ngOnInit(): void {}
}
