import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  login:boolean=true; 
  username:string="";
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username=this.authService.getAcc();
    if(parseInt(this.authService.getLogin())==1){
      this.login=false;
    }
  }

  Sigin(){
    this.router.navigateByUrl('/home');
  }

  Login(){
    this.router.navigateByUrl('/login');
  }

  LogOut(){
    this.authService.clearLocalStorage();
  }
}
