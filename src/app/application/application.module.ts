import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { FormsModule } from '@angular/forms';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';

@NgModule({
  declarations: [ApplicationComponent, ApplicationDetailsComponent],
  imports: [CommonModule, FormsModule, ApplicationRoutingModule],
})
export class ApplicationModule {}
