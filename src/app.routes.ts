import { Routes } from '@angular/router';
import { TrueComponentComponent } from './app/components/true-component/true-component.component';
import { LoginComponent } from './app/login/login.component';

export const routes: Routes = [

  {
    path: 'health',
    component: TrueComponentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
