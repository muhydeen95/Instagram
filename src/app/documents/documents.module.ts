import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentComponent } from './components/document/document.component';
import { SharedModule } from '@shared/shared.module';
import { FilterComponent } from './dialogs/filter/filter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentStatusComponent } from './components/document-status/document-status.component';

@NgModule({
  declarations: [DocumentComponent, DocumentStatusComponent, FilterComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
})
export class DocumentsModule {}
