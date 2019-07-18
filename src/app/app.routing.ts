import { Routes, RouterModule } from '@angular/router';
import { AppUrl } from './app.url';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const RouteLists: Routes = [
    { path: AppUrl.Login, component: LoginComponent },
    { path: AppUrl.Register, component: RegisterComponent },
];

export const AppRouting = RouterModule.forRoot(RouteLists);