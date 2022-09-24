import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './components/properties/properties.component';
import { SharedModule } from '@shared/shared.module';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertiesRoutingModule } from './properties-routing.module';



@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
