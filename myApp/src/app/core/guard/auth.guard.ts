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
      let url: string = state.url;
      return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authApiService.isLoggedIn) { return true; }
    this.authApiService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

}
