import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AuthenticationSidebarComponent } from './components/authentication-sidebar/authentication-sidebar.component';

@NgModule({
  declarations: [LayoutComponent, AuthenticationSidebarComponent],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
