import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MainComponent} from './Layout/main/main.component';
import { AdminComponent} from './admin/admin.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },     
  {
    path:"admin", component:AdminComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
