import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public LoginName: string = 'admin';

  constructor() {}
  ngOnInit(): void {}

  public changeName(name: any): void{
    this.LoginName = name.target.value;
  }
}
