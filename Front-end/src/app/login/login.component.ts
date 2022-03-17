import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'yasol123'
  password = ''
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(
    private router: Router, 
    public hardcodedAuth:HardcodedAuthService,
    private basicAuthService:BasicAuthService,
    ) { }

  ngOnInit(): void {
  }
  // handleLogin(){
  //   // console.log('id: ' + this.username)
  //   // console.log('password: ', this.password)
  //   if (this.hardcodedAuth.authenticate(this.username, this.password)){
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   } 
  //   else{
  //     this.invalidLogin = true;
  //   }
  // }
  // handleBasicAuthLogin(){
  //   this.basicAuthService.executeAuthService(this.username, this.password).subscribe(
  //     data => {
  //       console.log(data);
  //       this.router.navigate(['welcome', this.username]);
  //       this.invalidLogin = false;
  //     },
  //     error => {
  //       console.log(error);
  //       this.invalidLogin = true;
  //     }
  //   )
  // }
  handleJWTAuthLogin(){
    this.basicAuthService.executeJWTAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}
