import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = "Something went wrong.. Please try again or contact Yasol for the help!! You can't do anything alone!!!!!"
  constructor() { }

  ngOnInit(): void {
  }

}
