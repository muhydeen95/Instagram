// import { HttpErrorResponse } from '@angular/common/http';
import { 
  Component,
  Input,
  Inject,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ResponseModel } from 'app/models/response.model';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss'],
})
export class RegistrationDialogComponent implements OnInit {
  @Input() btnAction: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RegistrationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) { }

  ngOnInit() { }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.submit();
    }
  }

  public submit(): void {
    
  }
}
