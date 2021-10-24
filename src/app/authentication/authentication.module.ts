import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
