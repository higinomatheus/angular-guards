import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
	localStorage.setItem('token', 'fdsfkl123321');
  }

  doLogout(){
	localStorage.clear();
  }
}
