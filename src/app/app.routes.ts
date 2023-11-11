import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../utils/guards/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
  },
  {
    path: 'register-user',
    component: RegisterComponent,
    canActivate: [authGuard],
  },
];
