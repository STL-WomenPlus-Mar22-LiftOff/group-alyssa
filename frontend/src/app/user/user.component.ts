import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  trip: Trip[] = [];
  trips: Trip[] = [];



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
