import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllApplicationsComponent } from './all-applications.component';

const routes: Routes = [{ path: '', component: AllApplicationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllApplicationsRoutingModule { }
