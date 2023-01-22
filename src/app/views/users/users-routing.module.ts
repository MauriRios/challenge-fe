import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users.component';

const routesU: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: '', component: UsersComponent, children:[

    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent },

  ] }

];

export const routing = RouterModule.forChild(routesU);

@NgModule({
  imports: [RouterModule.forChild(routesU)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
