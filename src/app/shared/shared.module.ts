import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DocstreamSkeletonLoaderComponent } from './components/docstream-skeleton-loader/docstream-skeleton-loader.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LayoutComponent } from './components/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { InfoComponent } from './components/info/info.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    LoaderComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    DocstreamSkeletonLoaderComponent,
    NoDataComponent,
    CardComponent,
    SearchbarComponent,
    HelpCenterComponent,
    InfoComponent,
    FileViewerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    MatDialogModule,
    NgSelectModule,
    NgxExtendedPdfViewerModule,
    NgxDocViewerModule,
  ],
  exports: [
    LoadingButtonComponent,
    LoaderComponent,
    NavbarComponent,
    LayoutComponent,
    ErrorComponent,
    DocstreamSkeletonLoaderComponent,
    NgxSkeletonLoaderModule,
    NoDataComponent,
    CardComponent,
    SearchbarComponent,
    HelpCenterComponent,
    InfoComponent,
    NgSelectModule,
    FileViewerComponent,
    FooterComponent
  ],
})
export class SharedModule {}
