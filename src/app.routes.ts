import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { authGuard } from './utils/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
  },
];
