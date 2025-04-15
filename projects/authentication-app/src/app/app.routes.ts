import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];
