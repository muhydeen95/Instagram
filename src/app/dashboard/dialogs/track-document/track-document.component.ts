import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';

@Component({
  selector: 'app-track-document',
  templateUrl: './track-document.component.html',
  styleUrls: ['./track-document.component.scss'],
})
export class TrackDocumentComponent implements OnInit {
  @ViewChild('searchQuery') searchQueryElement!: ElementRef;
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchAction = new EventEmitter();


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogModel<any>) {}

  ngOnInit(): void {}

  public trackPressed(): void {
    this.searchAction.emit(true);
  }

  public getSearchQuery(
    searchQuery: string,
    event: KeyboardEvent | any,
    clear?: boolean
  ): void {
    clear ? (this.searchQueryElement.nativeElement.value = '') : null;
    this.searchQuery.emit(searchQuery);
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8 || searchQuery == '') {
      this.searchAction.emit(true);
    }
  }
}
