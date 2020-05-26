import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  lastUser: User = {
    username: "anonymous",
    password: ""

  };

  items: Observable<any[]>;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private firestore: AngularFirestore){
    this.items = firestore.collection('users').valueChanges();
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("logged") == "true"){
      this.usersService.getLastUser().subscribe(lastUser => this.lastUser = lastUser[0])
    }
  }

}
