import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { EmailTemplateRoutingModule } from './email-template-routing.module';



@NgModule({
  declarations: [
    EmailTemplateComponent
  ],
  imports: [
    CommonModule,
    EmailTemplateRoutingModule
  ]
})
export class EmailTemplateModule { }
