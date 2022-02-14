import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllApplicationsRoutingModule } from './all-applications-routing.module';
import { AllApplicationsComponent } from './all-applications.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AllApplicationsComponent
  ],
  imports: [
    CommonModule,
    AllApplicationsRoutingModule,
    SharedModule
  ]
})
export class AllApplicationsModule { }
