import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { DocstreamSkeletonLoaderComponent } from './components/docstream-skeleton-loader/docstream-skeleton-loader.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LayoutComponent } from './components/layout/layout.component';
import { HelpCenterComponent } from './components/help-center/help-center.component';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    LoaderComponent,
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    DocstreamSkeletonLoaderComponent,
    NoDataComponent,
    ConfirmationModalComponent,
    HelpCenterComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    MatDialogModule,
  ],
  exports: [
    LoadingButtonComponent,
    LoaderComponent,
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    DocstreamSkeletonLoaderComponent,
    NgxSkeletonLoaderModule,
    NoDataComponent,
    ConfirmationModalComponent,
    HelpCenterComponent
  ],
})
export class SharedModule {}
