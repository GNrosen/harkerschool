import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }

  public submitLogin(username: string, userpassword: string) {
    console.log('We are submitting the username and pw' + username);
    this.loginservice.verifyLogin(username, userpassword);
    this.processLogin();

  }

  private processLogin(): void {
    if (this.loginservice.isLoggegIn()) {
      this.router.navigate(['/roster']);
    }
  }

}
