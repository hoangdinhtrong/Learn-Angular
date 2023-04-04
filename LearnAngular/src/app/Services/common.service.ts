import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //#region Properties
  public counter: number = 0;
  //#endregion

  constructor() { }

  //#region  Methods
  public countSquare(n: number): number{
    return n * n;
  }
  //#endregion
}
