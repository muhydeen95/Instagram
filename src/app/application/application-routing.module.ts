import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'application-form',
    loadChildren: () =>
      import('./components/application-form/application-form.module').then(
        (m) => m.ApplicationFormModule
      ),
  },
  {
    path: 'applications',
    loadChildren: () =>
      import('./components/applications/applications.module').then(
        (m) => m.ApplicationsModule
      ),
  },
  {
    path: '',
    redirectTo: 'application-form',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
