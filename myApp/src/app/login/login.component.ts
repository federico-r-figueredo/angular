import { Component, OnInit } from '@angular/core';
import { User } from '../models/User'
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;

  user: User = {
    username: null,
    password: null
  }

  constructor(private route: ActivatedRoute,private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Aproved!");
    }, 5000)
  });

  login(){
    this.usersService.addUser(this.user);
    this.myPromise.then((val) => this.router.navigate(['/dashboard']));
  }

}
