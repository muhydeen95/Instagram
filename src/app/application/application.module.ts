import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [CommonModule, FormsModule, ApplicationRoutingModule],
})
export class ApplicationModule {}
