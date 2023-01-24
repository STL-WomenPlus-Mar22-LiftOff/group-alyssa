import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-view-individual-trip',
  templateUrl: './view-individual-trip.component.html',
  styleUrls: ['./view-individual-trip.component.css']
})
export class ViewIndividualTripComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.tripService.getTrip().subscribe((data: Trip[]) => {
      console.log(data);
      this.trips = data;
    });
  }

}
