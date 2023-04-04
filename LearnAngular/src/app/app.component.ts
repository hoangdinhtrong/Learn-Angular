import { Component, ViewChild } from '@angular/core';
import { SubPageComponent } from './sub-page/sub-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnAngular';

  @ViewChild('firstChild') firstChild: SubPageComponent | undefined;
  @ViewChild('secondChild') secondChild: SubPageComponent | undefined;

  public message: string ='';

  public reciveFromChildFnc(name:string): void{
    console.log(`Are you ${name}?`);
    this.message = `Hi ${name}`;
  }

  public callChildFunc(){
    this.firstChild?.reciveFromParentsFnc(5);
    this.secondChild?.reciveFromParentsFnc(25);
  }
}
