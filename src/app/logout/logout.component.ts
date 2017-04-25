import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  moduleId: module.id,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public loginservice: LoginService,
    private router: Router
  ) {
    console.log('constructor called from logout');
   }

  ngOnInit() {
    console.log('ngOnInit');
    this.logOutUser();
  }

  public logOutUser(){
    this.loginservice.logOutUser();
    console.log('we are going back to the home page');
    this.router.navigate(['/login']);

  }

}
