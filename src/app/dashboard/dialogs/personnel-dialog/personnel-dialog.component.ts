import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Dashboard } from 'app/dashboard/models/dashboard.model';
import { Region } from 'app/organization/models/region.model';

@Component({
  selector: 'app-personnel-dialog',
  templateUrl: './personnel-dialog.component.html',
  styleUrls: ['./personnel-dialog.component.scss']
})
export class PersonnelDialogComponent implements OnInit {

  @Output() event: EventEmitter<{ editObj: Dashboard; isEditing?: boolean }> =
    new EventEmitter<{ editObj: Region; isEditing?: boolean }>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogModel) {}

  ngOnInit(): void {}

}
