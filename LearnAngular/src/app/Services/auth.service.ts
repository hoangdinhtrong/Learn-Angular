import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private route: ActivatedRoute) { }

  public logout(): void{
    console.log('Logout action');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public login(user: string): void{
    console.log('login with ', user);
    if(user !== ''){
      this.loggedIn.next(true);

      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
      console.log(returnUrl);         
      if (returnUrl !== '') {
        this.router.navigate([returnUrl]);
      }
      else{
        this.router.navigate(['/home']);
      }
    }
  }

  public isLoggedIn():  Observable<boolean>{
    return this.loggedIn.asObservable();
  }
}
