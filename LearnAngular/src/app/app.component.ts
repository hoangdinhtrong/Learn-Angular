import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties
  title = 'LearnAngular';

  public baseInfo: string = 'https://codelanghien.club/covid19/menu';

  public name: string = '';
  public age: number = 0;

  public qrInfo: string = this.baseInfo;
  public width: number = 150;

  //#endregion

  //#region  Constructor
  constructor(router: ActivatedRoute) {
    router.queryParams.subscribe((v) => {
      console.log('queryParams=', v);
      if (v && v['data']) {
        const item = v['data'];
        console.log('queryParams data= ', item);
        console.log('name = ', item.name);
        console.log('age = ', item.age);

        const obj = JSON.parse(item);
        console.log('queryParams obj= ', obj);
        console.log('name = ', obj.name);
        console.log('age = ', obj.age);
      }
    });
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void { }
  //#endregion

  //#region  Events
  public onChangeBase(data: any): void {
    console.log(data.target.value);
    this.baseInfo = data.target.value;
    this.combine();
  }

  public onChangeName(data: any): void {
    console.log(data.target.value);
    this.name = data.target.value;
    this.combine()
  }

  public onChangeAge(data: any): void {
    console.log(data.target.value);
    this.age = data.target.value;
    this.combine();
  }


  private combine(): void {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.qrInfo = `${this.baseInfo}?data=${data}`;
    console.log('qrInfo=', this.qrInfo);
  }
  //#endregion

}
