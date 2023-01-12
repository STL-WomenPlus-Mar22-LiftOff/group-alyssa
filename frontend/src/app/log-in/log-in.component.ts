import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username = "";
  password = "";
  user: User;

  constructor(private router: Router, private loginService: AuthenticationService)  {
    this.user = new User();
  }

  ngOnInit() {}

  loginStatus(results: any) {
    console.log(results);
    if (results.status === "success") {
      sessionStorage.setItem("username", this.username);
      this.router.navigate([`/dashboard`]);
    } else  {
      console.log("failure");
    }
  }

  checkLogin()  {
    this.loginService.authenticate(this.user).subscribe((result)  =>  {
      this.loginStatus(result);
    },
    error =>  {
      console.log("Authentication Error");
    })
  }
}
