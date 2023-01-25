import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { User } from '../user';

@Component({
  selector: 'app-view-all-trips',
  templateUrl: './view-all-trips.component.html',
  styleUrls: ['./view-all-trips.component.css']
})
export class ViewAllTripsComponent implements OnInit {

  trips: Trip[] = [];
  user: User[];
  trip: Trip[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.tripService.getTrip().subscribe((data: Trip[]) => {
      console.log(data);
      this.trip = data;
    });
  }

}
