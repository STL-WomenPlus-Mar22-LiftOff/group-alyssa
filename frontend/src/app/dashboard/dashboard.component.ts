import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // user: User;

  constructor() {
    // this.user = new User();
   }

  ngOnInit():void {
    // console.log(sessionStorage.getItem("id"));
    // console.log(this.user);
    // console.log(this.user.username);
    // console.log(this.user.email);
    // console.log(this.user.id);
  }

}
