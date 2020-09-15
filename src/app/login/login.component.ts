import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': '-'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userId:string = "";
  password:string = "";
  message:string = "";
  isLogged = 0;

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  Sigin(){
    var result: any;
    var param = {
      username: this.userId,
      password: this.password
    };
    this.authService.login(param).subscribe((res) => {
      result = res;
    }, err => {
      this.message = err.error.message
    }, () => {
      this.authService.setToken(result.object.accessToken);
      this.authService.setLogin(1);
      this.authService.setACC(result.object.userName);
      if (this.userId!=='namnguyenthanh'){
      this.router.navigateByUrl('/dashboard');
      }
      else{
        this.router.navigateByUrl('/admin');
      }
    })
  }
}
