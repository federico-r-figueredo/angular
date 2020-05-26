import { Component, OnInit } from '@angular/core';
import { User } from '../models/User'
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  user: User = {
    username: null,
    password: null
  }

  logged = false;

  constructor(private route: ActivatedRoute,private router: Router, private usersService: UsersService) { }

  myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Aproved!");
      this.logged = true;
    }, 5000)
  });

  login(){
    if(this.user.username != null && this.user.password){
      this.usersService.addUser(this.user);
      this.myPromise.then((val) => this.router.navigate(['/dashboard', { "logged": "aaa" }]));
    } else {
      console.log("Inut values are null");
    }
  }

}
