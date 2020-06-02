import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApiService } from 'src/app/auth/core/services/auth-api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authApiService: AuthApiService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkLogin();
  }
  checkLogin(): boolean {
    console.log(this.authApiService.isLoggedIn);
    if (this.authApiService.isLoggedIn) { return true; }
    return false;
  }
}
