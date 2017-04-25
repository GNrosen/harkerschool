import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  constructor () {}

  public verifyLogin(userid: string, password: string){
    console.log('Verify Login Entered');
    localStorage.setItem('userid', userid);
    localStorage.setItem('password', password);
  }

  public logOutUser(){
    localStorage.removeItem('userid');
    localStorage.removeItem('password');
  }

  public isLoggegIn(): boolean {
    return this.getUser() !== null;
  }

  public getUser(): string {
    return localStorage.getItem('userid');
  }




}
