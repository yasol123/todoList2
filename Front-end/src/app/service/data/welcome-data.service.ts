import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient,
  ) { }

  //retrieve a data from backend service
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
    //return this.http.get("http://localhost:8080/hello-world-bean");
    //console.log("Execute HelloWorldBean Service");
  }

  //http://localhost:8080/hello-world/path-variable/yasol123
  executeHelloWorldServiceWithPathVariable(name:any){
    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, /*{headers}*/);
  }
  // createBasicAuthHttpHeader(){
  //   let username = "yasol123";
  //   let password = "1234rt";
  //   let basicAuthHeaderString="Basic " + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}
