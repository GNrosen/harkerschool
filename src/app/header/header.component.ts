import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginservice: LoginService) {  }

  ngOnInit() {
  }

  public logOut(){
    console.log('We are logging out');
    this.loginservice.logOutUser();
    console.log('Log out complete');
  }

  public isLoggedIn(): boolean {
    return this.loginservice.isLoggegIn();
  }

  public getUser(): string {
    return this.loginservice.getUser();
  }

}
