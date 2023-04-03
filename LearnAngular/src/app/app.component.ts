import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LearnAngular';

  public name: string = 'Hoang Dinh Trong';
  public age: number = 15;
  public fruits = [
    { name: 'Apple', price: 12, isSale: true },
    { name: 'Orange', price: -3, isSale: false }
  ];

  constructor() { }

  public ngOnInit(): void {

  }
}
