import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent {
  @Input() name: string ='';
  @Output() callParentsEvent: EventEmitter<any> = new EventEmitter();

  public callParentsFunc() : void{
    console.log("Call Parents");
    this.callParentsEvent.emit(this.name);
  }

  public reciveFromParentsFnc(n: number): void{
    console.log(`My name is ${this.name}, thank you give me ${n} dollars`);
  }
}
