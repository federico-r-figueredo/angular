import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  username = "Anonymous";

  items: Observable<any[]>;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private firestore: AngularFirestore){
    this.items = firestore.collection('users').valueChanges();
  }

  ngOnInit(): void {
    /*
    if(this.route.snapshot.paramMap.get("username") != null){
      this.username = this.route.snapshot.paramMap.get("username");
    }
    console.log("Usuarios almacenados en usersService:");
    console.log(this.usersService.getUsers());
    */
    if(this.usersService.getLastUser().length > 0){
      var lastUser = this.usersService.getLastUser();
      this.username = lastUser[0].username;
    }
  }

}
