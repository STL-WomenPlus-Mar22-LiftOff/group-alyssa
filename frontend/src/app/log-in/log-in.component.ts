import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user.service';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [ UserService]
})
export class LogInComponent implements OnInit {

  isValidForm = true;

  user: User;
  usernamePattern = "^[a-zA-Z0-9]*$";


  constructor(private router: Router, private loginService: AuthenticationService, private userService: UserService, private tripService: TripService)  {
    this.user = new User();
  }

  ngOnInit() {
    if(this.loginService.isUserLoggedIn())  {
      this.router.navigate(['/dashboard']);
    }
  }

  loginStatus(results: any) {
    // console.log("results: " + results.status);
    if (results.status === "success") {
      // sessionStorage.setItem("username", this.user.username);
      this.saveUserInfo();
      this.router.navigate([`/dashboard`]);
      this.isValidForm = true;
    } else  {
      this.router.navigate([`/`]);
      this.isValidForm = false;
    }
  }

  saveUserInfo() {
    this.userService.getUserInfo(this.user.username).subscribe((result) =>  {
        this.user.username = result.username;
        this.user.email = result.email;
        this.user.id = result.id;
        sessionStorage.setItem("username", result.username);
        sessionStorage.setItem("email", result.email);
        sessionStorage.setItem("id", this.user.id.toString());
        this.router.navigate([`/dashboard`]);
    })
  }

  checkLogin()  {
    this.loginService.authentication(this.user).subscribe((result)  =>  {
      this.loginStatus(result);
    },
    error =>  {
      console.log("Authentication Error");
    }
    )
  }

}
