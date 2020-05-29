import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';



@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
