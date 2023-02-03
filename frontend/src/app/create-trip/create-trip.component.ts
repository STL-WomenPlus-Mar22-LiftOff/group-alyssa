import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { TripComponent } from '../trip/trip.component';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
})
export class CreateTripComponent implements OnInit {

  trip: Trip;
  users: User[] = [];

  tripNamePattern = "^[a-zA-Z0-9]*$";
  startingLocationPattern = "/^[A-Za-z]+$/";
  endingLocationPattern = "/^[A-Za-z]+$/";

  constructor(private tripService: TripService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.trip = new Trip;
  }

  ngOnInit(): void {
    this.getUserSessionId();
    this.trip.user_id = this.getUserSessionId() || "";
    let loader = new Loader({
      apiKey: "AIzaSyD9ZpWF9QVL7RFthrS3DdPAwhN4wxjWat4",
      version: "weekly"
    })
    loader.load().then(() => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.63838918073673, lng: -90.25453364293442 },
        zoom: 5
      })
      directionsRenderer.setMap(map);

    })


  };

  getUserSessionId() {
    return sessionStorage.getItem("id");
  }

  goToViewTrip() {
    this.router.navigate([`/view-all-trips`]);
  }

  onSubmit(trip: Trip) {
    this.tripService.addTrip(this.trip).subscribe((result) => this.goToViewTrip());
  }


}
