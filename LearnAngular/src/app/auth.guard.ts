import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().pipe(
      take(1),map((isLoggedIn: boolean) => {
        if(!isLoggedIn){
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
  
}
