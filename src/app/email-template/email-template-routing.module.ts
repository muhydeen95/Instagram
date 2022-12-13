import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplateComponent } from './components/email-template/email-template.component';

const routes: Routes = [
    {
        path: '',
        component: EmailTemplateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailTemplateRoutingModule {}
