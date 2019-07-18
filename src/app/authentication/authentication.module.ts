import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BootstrapElementsComponent } from './components/bootstrap-elements/bootstrap-elements.component';
import { CardsComponent } from './components/cards/cards.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MembersComponent } from './components/members/members.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingComponent,
    ProfileComponent,
    BootstrapElementsComponent,
    CardsComponent,
    WidgetsComponent,
    MembersComponent,
    MemberCreateComponent,
  ],
  imports: [
    AuthRouting,
    SharedsModule,
    CommonModule
  ]
})
export class AuthenticationModule { }
