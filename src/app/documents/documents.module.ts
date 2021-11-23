import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentComponent } from './components/document/document.component';
import { SharedModule } from '@shared/shared.module';
import { FilterComponent } from './dialogs/filter/filter.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DocumentComponent, FilterComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
})
export class DocumentsModule {}
