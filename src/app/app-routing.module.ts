import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './views/authViews/login/login.module#LoginPageModule'
      },
      {
        path: 'forgot-password',
        loadChildren: './views/authViews/forgot-password/forgot-password.module#ForgotPasswordPageModule'
      },
      {
        path: 'register',
        loadChildren: './views/authViews/register/register.module#RegisterPageModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './views/adminViews/home/home.module#HomePageModule'
      },
      {
        path: 'list',
        loadChildren: './views/adminViews/list/list.module#ListPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
