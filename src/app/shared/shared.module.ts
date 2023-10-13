import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LayoutComponent } from './components/layout/layout.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    LoaderComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    InfoComponent,
    FooterComponent,
    SidebarComponent
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
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    NgxSkeletonLoaderModule,
    InfoComponent,
    FooterComponent,
    SidebarComponent
  ],
})
export class SharedModule {}
