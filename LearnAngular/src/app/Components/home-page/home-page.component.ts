import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public counter: number = 0;
  public counterSquare: number = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    let n = this.commonService.counter;
    this.counter = n;
    this.counterSquare = this.commonService.countSquare(this.counter);
    this.commonService.counter++;
  }
}
