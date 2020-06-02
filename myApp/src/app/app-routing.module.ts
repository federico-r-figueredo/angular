import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component'
import { ConfigurationComponent } from './shared/configuration/configuration.component';
import { AboutComponent } from './shared/about/about.component';
import { AuthGuard } from './core/guard//auth.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'about', component: AboutComponent },
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
