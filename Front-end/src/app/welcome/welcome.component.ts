//package com.yasol.springboot.web;
//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core'; //',.app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import {AppComponent} from '../app.component'; //this is how you import
/*
@ComponentScan(
  value = "com.yasol.springboot.web")
*/
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {
  message : string = 'Some Welcome Message from Yasol'
  name: string = ''
  welcomeMessageFromService: string = "";

  //public SpringBootFirstWebApplication(){
  
  //ActivatedRoute
  constructor(
    private route: ActivatedRoute, 
    private service: WelcomeDataService,
    ) { }
  
  //void init(){
  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name']
    console.log('Welcome! Mr. ' + this.route.snapshot.params['name'])
  }
  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // this.service.executeHelloWorldBeanService().subscribe(
    //   res => console.log(res)
    // );
    console.log("last line of getWelcomeMessage");
  }
  handleSuccessfulResponse(response:any){
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message); //print a console message on the terminal instead of the object in JSON.
  }
  handleErrorResponse(error:any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);

    this.welcomeMessageFromService = error.error.message
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    );
  }

}

export class Class1{

}
export class Class2{

}