import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { AuthApiService } from '../../core/services/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  hide = true;
  user: User = {
    name: null,
    password: null
  }
  constructor(private authApiService: AuthApiService, private router: Router) { }
  myPromise = new Promise(function(resolve){
    setTimeout(function(){
      resolve("Aproved!");
    }, 5000)
  });
  login(){
    if(this.user.name != null && this.user.password){
      this.authApiService.logUser(this.user);
      this.myPromise.then(() => this.router.navigate(['/dashboard']));
    } else {
      console.log("Input values are null");
    }
  }
}
