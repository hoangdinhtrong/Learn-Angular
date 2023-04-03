import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnAngular';

  public name: string = 'Hoang Dinh Trong';

  constructor() { }

  public resetName(): void {
    console.log('reset name');

    this.name = '';
  }
}
