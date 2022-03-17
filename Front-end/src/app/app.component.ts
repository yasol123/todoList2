import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}{{message}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yasol\'s todo';
  message = 'Welcome to TCS';
}
