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

  addUser(newUser) {
     this.USERS.push(newUser);
  }

}
