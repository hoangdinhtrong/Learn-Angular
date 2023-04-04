import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService){}


  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  public logout():void{
    this.authService.logout();
  }
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

}
