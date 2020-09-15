import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from "./api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged:number = 0;

  constructor(
    private router: Router,
    private api: API) {
  }
  login(data) {
    return this.api.post('/api/Account/login', data);
  }

  setLogin(token) {
    return localStorage.setItem('isLogged', token);
  }

  setACC(acc){
    return localStorage.setItem('UserName', acc);
  }

  setToken(token) {
    return localStorage.setItem('token', token);
  }

  getLogin(){
    return localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') : sessionStorage.getItem('isLogged');
  }

  getAcc(){
    return localStorage.getItem('UserName') ? localStorage.getItem('UserName') : sessionStorage.getItem('UserName');
  }

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
  }

  clearLocalStorage(){
    localStorage.removeItem('token');
    localStorage.setItem("isLogged","0");
    localStorage.setItem('UserName', "");
    location.reload(true);
  }

  getCurrentUser(){
    return this.api.get('/api/Account//api/Account/get-current');
  }
}

