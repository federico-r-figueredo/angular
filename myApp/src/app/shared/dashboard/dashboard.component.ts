import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/core/models/User';
import { AuthApiService } from 'src/app/auth/core/services/auth-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {
  loggedUser: User = {
    name: 'Anonymus',
    password: null
  };
  items: Observable<any[]>;
  constructor(private authApiService: AuthApiService){
  }
  ngOnInit(): void {
      this.authApiService.getLoggedUser().subscribe(loggedUser => this.loggedUser = loggedUser);
  }
}
