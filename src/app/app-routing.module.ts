import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OfflineComponent } from './offline/offline.component';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./email-template/email-template.module').then(
        (m) => m.EmailTemplateModule
      ),
  },
  {
    path: 'offline',
    component: OfflineComponent,
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
