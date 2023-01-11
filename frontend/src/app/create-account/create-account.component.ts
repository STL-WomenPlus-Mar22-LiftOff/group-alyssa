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

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = new User;
  }

  ngOnInit(): void {
  }

  //when user creates account (and passwords match) it will route to the dashboard page

  routeToDashboard()  {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit(password: String, verifyPassword: String)  {
    console.log(this.user.username);
    if(password===verifyPassword) {
      this.userService.addUser(this.user).subscribe((result) => this.routeToDashboard());
    }
  }

}
