import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { User } from '../user';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: Trip[] = [];
  user: User;

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.tripService.getAllTrips().subscribe((data: Trip[]) => {
      console.log(data);
      this.trips = data;
    });

  }

}
