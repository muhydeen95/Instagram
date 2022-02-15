import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/applications/applications.module').then(
        (m) => m.ApplicationsModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./components/application-form/application-form.module').then(
        (m) => m.ApplicationFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
