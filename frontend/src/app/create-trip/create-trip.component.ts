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
      apiKey: "",
      version: "weekly"
    })
    loader.load().then(() => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.63838918073673, lng: -90.25453364293442 },
        zoom: 4
      })
      directionsRenderer.setMap(map);
      directionsRenderer.setPanel(document.getElementById('directionsPanel'));

        const onChangeHandler = function () {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
        };

        (document.getElementById("start") as HTMLElement).addEventListener(
          "change",
          onChangeHandler
        );
        (document.getElementById("end") as HTMLElement).addEventListener(
          "change",
          onChangeHandler
        );

    })
    function calculateAndDisplayRoute(
      directionsService: google.maps.DirectionsService,
      directionsRenderer: google.maps.DirectionsRenderer
    ) {
      directionsService
        .route({
          origin: {
            query: (document.getElementById("start") as HTMLInputElement).value,
          },
          destination: {
            query: (document.getElementById("end") as HTMLInputElement).value,
          },
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
        })
        //.catch((e) => window.alert("Directions request failed due to " + status));
    }



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
