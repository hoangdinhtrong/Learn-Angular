import { Component, OnInit } from '@angular/core';
import { HttpServerService } from './Services/http-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'LearnAngular';
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getRandomUsers(10).subscribe((data) => {
      console.log('getRandomUsers', data.results);
    });

    const payload = { body: 'Đây là message số 4', postId: 1 };
    this.httpServerService.postComment(payload).subscribe((data) => {
      console.log('postComment', data);
    });

    this.httpServerService.getComments().subscribe((data) => {
      console.log('getComments', data);
    });
  }
}
