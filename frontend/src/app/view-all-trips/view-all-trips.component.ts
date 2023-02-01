import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-trips',
  templateUrl: './view-all-trips.component.html',
  styleUrls: ['./view-all-trips.component.css']
})
export class ViewAllTripsComponent implements OnInit {

  trips: Trip[];
  user: User[];
  tripInfo: Trip;
  tripName: string;
  startingLocation: string;
  endingLocation: string;
  tripValues = Object.values;
  // trip: Trip[] = [];

  constructor(private tripService: TripService, private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
    this.tripInfo = new Trip;
    this.tripName = sessionStorage.getItem("tripName");
    this.startingLocation = sessionStorage.getItem("startingLocation");
    this.endingLocation = sessionStorage.getItem("endingLocation");
    this.tripValues = Object.values;
   }

  ngOnInit(): void {
    this.tripService.getAllTrips().subscribe((data: Trip[]) => {
      console.log(data);
      this.trips = data;
    });
  }

}
