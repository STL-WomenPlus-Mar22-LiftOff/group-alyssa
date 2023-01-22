import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = new User;
  }

  ngOnInit(): void {
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

  onSubmit(password: String, verifyPassword: String)  {
    // console.log(this.user.username);
    if(password===verifyPassword) {
      this.userService.addUser(this.user).subscribe((result) => this.routeToDashboard());
  } else {
    this.router.navigate([`/`]);
  }
}

  // checkUsername(username: String) {
  //   if (username != "") {
  //     this.userService.checkUsername(username).subscribe(result => this.usernameAvailable = result);
  //   }
  // }

  // checkEmail(email: String) {
  //   if (email != "") {
  //     this.userService.checkEmail(email).subscribe(result => this.emailAvailable = result);
  //   }
  // }

}
