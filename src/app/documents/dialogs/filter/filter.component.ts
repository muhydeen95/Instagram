import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { FilterDTO } from 'app/documents/models/documents.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() event: EventEmitter<{
    editObj: FilterDTO;
    isEditing?: boolean;
  }> = new EventEmitter<{ editObj: FilterDTO; isEditing?: boolean }>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogModel<FilterDTO>
  ) {}
  ngOnInit(): void {
  }

}