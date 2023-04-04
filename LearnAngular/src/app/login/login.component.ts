import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 constructor(private authServie: AuthService){}
  public login(): void{
    this.authServie.login('hdtrong');
  }
}
