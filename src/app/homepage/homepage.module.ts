import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedModule } from '@shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { AdvertCardComponent } from './components/advert-card/advert-card.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    CategoryCardComponent,
    AdvertCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
