import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthRouting } from './authentication.routing';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AuthRouting,
    CommonModule
  ]
})
export class AuthenticationModule { }
