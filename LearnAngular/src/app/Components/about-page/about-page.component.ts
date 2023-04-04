import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public counter: number = 0;
  public counterSquare: number = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    let n: number = this.commonService.counter;
    this.counter = n;
    this.counterSquare = this.commonService.countSquare(this.counter);
    this.commonService.counter++;
  }

}
