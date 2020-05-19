import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  username: String = "Anonymous";

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("username") != null){
      this.username = this.route.snapshot.paramMap.get("username");
    }
    console.log("Usuarios almacenados en usersService:");
    console.log(this.usersService.getUsers());
  }

}
