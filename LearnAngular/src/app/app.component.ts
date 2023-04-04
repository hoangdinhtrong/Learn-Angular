import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnAngular';

  public MyColor: string = 'red';
}
//// Some directive
//// Component Directive
//// Attribute Directive
//// Structural Directive
//// Command to create new directive: ng g directive <name_directive>
