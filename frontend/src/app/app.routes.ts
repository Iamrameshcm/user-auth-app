import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { ForgotPass } from './forgot-pass/forgot-pass';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'forgot', component: ForgotPass },
];
