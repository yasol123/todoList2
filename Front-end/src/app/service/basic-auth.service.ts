import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { HelloWorldBean } from './data/welcome-data.service';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http:HttpClient) { }

  // executeAuthService(username:string, password:string){
  //   let basicAuthHeaderString="Basic " + window.btoa(username + ':' + password);

  //   let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   });
  //   return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers})
  //           .pipe(
  //             map(
  //               data => {
  //                 sessionStorage.setItem(AUTHENTICATED_USER, username);
  //                 sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  //                 return data;
  //               }
  //             )
  //           );
  // }
  executeJWTAuthService(username:string, password:string){
    return this.http.post<any>(`http://localhost:8080/authenticate`, {username, password})
            .pipe(
              map(
                data => {
                  sessionStorage.setItem(AUTHENTICATED_USER, username);
                  sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
                  return data;
                }
              )
            );
  }

  

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
    return null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
}
export class AuthenticationBean{
  constructor(public message:string){ }
}
