import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingButtonComponent, LoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingButtonComponent, LoaderComponent],
})
export class SharedModule {}
