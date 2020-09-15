import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': '-'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getCurrentUser(){
    // thiet lap lại header
    let accessToken = localStorage.getItem("_accessToken");
    let accessTokenHeader = "Bearer " + accessToken;
    httpOptions.headers = httpOptions.headers.set('Authorization', accessTokenHeader);
    // Goi len server backend
    this.http.get('https://vnpt.fastlms.vn/api/Account/get-current', {
      headers: httpOptions.headers
    }).subscribe(
      data => {
        console.log(1, data);
      },
      error => {
        console.log(2, error);
      }
    )
  }
}
