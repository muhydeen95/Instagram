import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDialogComponent } from './dialogs/dashboard-dialog/dashboard-dialog.component';
import { UploadDocumentComponent } from './dialogs/upload-document/upload-document.component';
import { QuickActionsCardsComponent } from './components/quick-actions-cards/quick-actions-cards.component';

@NgModule({
  declarations: [DashboardComponent, DashboardDialogComponent, UploadDocumentComponent, QuickActionsCardsComponent],
  imports: [CommonModule, DashboardRoutingModule, MatDialogModule, SharedModule],
})
export class DashboardModule {}
