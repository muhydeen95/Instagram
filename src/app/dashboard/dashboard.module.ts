import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './component/story/story.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dasboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FeedsComponent } from './component/feeds/feeds.component';



@NgModule({
  declarations: [
    StoryComponent,
    DashboardComponent,
    FeedsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
