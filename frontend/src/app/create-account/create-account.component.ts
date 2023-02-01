import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user: User;
  usernameAvailable = true;
  emailAvailable = true;

  usernamePattern = "^[a-zA-Z0-9]*$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private userService: UserService, private loginService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = new User;
  }

  ngOnInit(): void {
    if(this.loginService.isUserLoggedIn())  {
      this.router.navigate(['/dashboard']);
    }
  }

  //when user creates account (and passwords match) it will route to the dashboard page

  routeToDashboard()  {
    this.router.navigate([`/dashboard`]);
  }

  saveSessionInfo(result: any)  {
      sessionStorage.setItem("username", result.username);
      sessionStorage.setItem("email", result.email);
      sessionStorage.setItem("id", result.id.toString());
      this.routeToDashboard();
  }

  onSubmit(pwHash: String, verifyPassword: String)  {
    // console.log(this.user.username);
    if(pwHash===verifyPassword) {
      this.userService.addUser(this.user).subscribe((result) => this.userService.getUserInfo(this.user.username).subscribe((result) => this.saveSessionInfo(result)));
  } else {
    this.router.navigate([`/create-account`]);
  }
}

  checkUsername(username: String) {
    if (username != "") {
      this.userService.checkUsername(username).subscribe(result => this.usernameAvailable = result);
    }
  }

  checkEmail(email: String) {
    if (email != "") {
      this.userService.checkEmail(email).subscribe(result => this.emailAvailable = result);
    }
  }

}
