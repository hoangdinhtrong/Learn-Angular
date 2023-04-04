import { Injectable, inject } from '@angular/core';
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
        console.log(state.url);
        console.log(isLoggedIn);
        if(!isLoggedIn){
          //this.router.navigate(['/login']);
          console.log(state.url);
          this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url }});
          return false;
        }
        return true;
      })
    );
  }
  
}

// export const AuthGuard = () => {
//   console.log('authGuard#canActivate called');
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   if(!authService.isLoggedIn()){
//     //router.navigate(['/login']);
//     router.parseUrl('/login')
//     //router.navigate(['login'],{queryParams:{'redirectURL':state.url}});
//     return false;
//   }
//   return true;
// };
