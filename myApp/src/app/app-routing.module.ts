import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { ConfigurationComponent } from './configuration/configuration.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard] },
  {path: 'about', component: AboutComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
