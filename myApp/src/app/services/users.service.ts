import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS: User[] = [];

  constructor() { }

  getUsers(): User[] {
    return this.USERS;
  }

  getLastUser(): User[] {
    var len = this.USERS.length;
    return this.USERS.slice((len - 1), (len));
  }

  addUser(newUser) {
     this.USERS.push(newUser);
  }

}
