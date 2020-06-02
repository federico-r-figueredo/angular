import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { Subject, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthApiService {
  isLoggedIn = false;
  redirectUrl: string;
  loggedUser: Subject<User> = new ReplaySubject(1);
  user: User = {
    name: undefined,
    password: undefined
  };
  constructor() { }
  logUser (userData) {
    this.user.name = userData.name;
    this.user.password = userData.password;
    this.isLoggedIn = true;
    this.loggedUser.next(this.user);
  }
  logoutUser() {
    this.loggedUser.next({
      name: undefined,
      password: undefined
    });
    this.isLoggedIn = false;
  }
  getLoggedUser(): Observable<User> {
    return this.loggedUser;
  }
  loggedIn(){
    return this.isLoggedIn;
  }
}
