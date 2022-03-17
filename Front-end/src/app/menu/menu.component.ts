import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn = false;
  constructor(public hardAuth: HardcodedAuthService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardAuth.isUserLoggedIn();
  }

}
