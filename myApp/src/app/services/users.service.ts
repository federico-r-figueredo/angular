import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS: User[] = [{
    username: "anonymous",
    password: ""
  }];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.USERS);
  }

  getLastUser(): Observable<User[]> {
    var len = this.USERS.length;
    return of(this.USERS.slice((len - 1), (len)));
  }

  addUser(newUser) {
     this.USERS.push(newUser);
  }

}
