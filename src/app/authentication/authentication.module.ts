import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    AuthRouting,
    SharedsModule,
    CommonModule
  ]
})
export class AuthenticationModule { }
