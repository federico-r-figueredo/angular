import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../../core/services/auth-api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {
  constructor(private authApiService: AuthApiService, private router: Router) { }
  myPromise = new Promise(function(resolve){
    setTimeout(function(){
      resolve("Logged out!");
    }, 3000)
  });
  ngOnInit(): void {
    this.authApiService.logoutUser();
    this.myPromise.then(() => this.router.navigate(['/dashboard']));
  }
}
