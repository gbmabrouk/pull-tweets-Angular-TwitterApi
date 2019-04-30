import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitterservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]
})
export class AppComponent implements OnInit {
  user;

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.user().subscribe(user => this.user = user.data);
    console.log(this.user);
  }
}
