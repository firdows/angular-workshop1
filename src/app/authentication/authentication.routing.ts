import { Routes, RouterModule } from '@angular/router';
import { AuthUrl } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BootstrapElementsComponent } from './components/bootstrap-elements/bootstrap-elements.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { CardsComponent } from './components/cards/cards.component';

const RouteLists: Routes = [
  { path: '', redirectTo: AuthUrl.Dashboard, pathMatch: 'full' },
  { path: AuthUrl.Dashboard, component: DashboardComponent },
  { path: AuthUrl.Setting, component: SettingComponent },
  { path: AuthUrl.Profile, component: ProfileComponent },
  { path: AuthUrl.BootstrapElement, component: BootstrapElementsComponent },
  { path: AuthUrl.Cards, component: CardsComponent },
  { path: AuthUrl.Widgets, component: WidgetsComponent },
];

export const AuthRouting = RouterModule.forChild(RouteLists);