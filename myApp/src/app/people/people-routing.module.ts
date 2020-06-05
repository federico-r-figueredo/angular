import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleGuard } from './core/guard/people.guard';
import { PeopleListComponent } from './shared/people-list/people-list.component';
import { PeopleDetailsComponent } from './shared/people-details/people-details.component';
import { PeopleAddComponent } from './shared/people-add/people-add.component';

const routes: Routes = [
  {path: '', component: PeopleListComponent, canActivate: [PeopleGuard]},
  {path: 'create', component: PeopleAddComponent, canActivate: [PeopleGuard]},
  {path: 'details/:id', component: PeopleDetailsComponent, canActivate: [PeopleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PeopleRoutingModule { }
