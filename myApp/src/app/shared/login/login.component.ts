import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  user: User = {
    name: null,
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
    if(this.user.name != null && this.user.password){
      this.usersService.addUser(this.user);
      this.myPromise.then((val) => this.router.navigate(['/dashboard']));
    } else {
      console.log("Input values are null");
    }
  }

}
