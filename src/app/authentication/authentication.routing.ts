import { Routes, RouterModule } from '@angular/router';
import { AuthUrl } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const RouteLists: Routes = [
  { path: '', redirectTo: AuthUrl.Dashboard, pathMatch: 'full' },
  { path: AuthUrl.Dashboard, component: DashboardComponent }
];

export const AuthRouting = RouterModule.forChild(RouteLists);