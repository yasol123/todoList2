import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username: string, password: string){
    console.log('before: ' + this.isUserLoggedIn());
    if (username === "yasol123" && password ==='1234rt'){
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after: ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}
