import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  isValidForm = true;

  user: User;
  usernamePattern = "^[a-zA-Z0-9]*$";


  constructor(private router: Router, private authenticationService: AuthenticationService, private userService: UserService)  {
    this.user = new User();
  }

  ngOnInit() {}

  loginStatus(results: any) {
    console.log("results: " + results.status);
    if (results.status === "success") {
      sessionStorage.setItem("username", this.user.username);
      // this.saveUserInfo();
      this.router.navigate([`/dashboard`]);
      this.isValidForm = true;
    } else  {
      this.router.navigate([`/`]);
      this.isValidForm = false;
    }
  }

  // saveUserInfo() {
  //   this.userService.getUserInfo(this.user.username).subscribe((result) =>  {
  //       sessionStorage.setItem("username", result.username);
  //       // sessionStorage.setItem("email", result.email);
  //       sessionStorage.setItem("id", result.id.toString());
  //       this.router.navigate([`/dashboard`]);
  //   })
  // }

  checkLogin()  {
    this.authenticationService.authenticate(this.user).subscribe((result)  =>  {
      this.loginStatus(result);
    },
    // error =>  {
    //   console.log("Authentication Error");}
    )
  }

}
