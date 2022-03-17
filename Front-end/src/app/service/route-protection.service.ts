import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteProtectionService implements CanActivate {

  constructor(private hardAuth: HardcodedAuthService, private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ){
      if (this.hardAuth.isUserLoggedIn()){
        return true;
      }
      this.router.navigate(['login']);
      //how to route back to the login page?
      return false;
    }
}
