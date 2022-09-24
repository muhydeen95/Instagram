import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
    },
    {
        path: 'all',
        component: PropertiesComponent
    },
    {
        path: 'detail',
        component: PropertyDetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesRoutingModule {}
