// / <reference types="@types/google.maps" />


import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { TripComponent } from '../trip/trip.component';
import { User } from '../user';
import { UserService } from '../user.service';
// import {} from 'google.maps';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
})
export class CreateTripComponent implements OnInit {

  trip: Trip;
  trips: String[];
  // users: User[] = [];
  user: User;
  tripName: string;
  startingLocation: string;
  endingLocation: string;

  tripNamePattern = "^[a-zA-Z0-9]*$";
  startingLocationPattern = "/^[A-Za-z]+$/";
  endingLocationPattern = "/^[A-Za-z]+$/";

  constructor(private tripService: TripService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.trip = new Trip;
    this.user = new User;
    this.trips = [];
    this.tripName = sessionStorage.getItem("tripName");
    this.startingLocation = sessionStorage.getItem("startingLocation");
    this.endingLocation = sessionStorage.getItem("endingLocation");
  }

  ngOnInit(): void {

    // if (this.tripName !== "")  {
    //   this.tripService.getTripId(parseInt(this.tripName)).subscribe(response => {this.trips.push(response.tripName)})
    // }
    // if (this.startingLocation !== "")  {
    //   this.tripService.getTripId(parseInt(this.startingLocation)).subscribe(response => {this.trips.push(response.startingLocation)})
    // }
    // if (this.endingLocation !== "")  {
    //   this.tripService.getTripId(parseInt(this.endingLocation)).subscribe(response => {this.trips.push(response.endingLocation)})
    // }

    this.getUserSessionId();
    let user_id = parseInt(this.getUserSessionId() || "");
    this.userService.getUserId(user_id).subscribe(result => this.user = result);
  }

  getUserSessionId()  {
    return sessionStorage.getItem("id");
  }

  setTripIdSession()  {
    this.tripService.getTripIdByUserId(this.getUserSessionId()).subscribe((result) => {
      sessionStorage.setItem("tripName", result[0]);
      sessionStorage.setItem("startingLocation", result[1]);
      sessionStorage.setItem("endingLocation", result[2]);
      this.goToViewAllTrips();
    });
  }

  goToViewAllTrips()  {
    this.router.navigate([`/view-all-trips`]);
  }

  onSubmit(trip: Trip)  {
    trip.user = this.user;
    this.tripService.addTrip(this.trip).subscribe((result) => { this.setTripIdSession();});
    // this.tripService.addTrip(this.trip).subscribe((result) => this.goToViewAllTrips());
  }

  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 8
  // });
//   ngOnInit(): void {
//     const mapProperties = {
//          center: new google.maps.LatLng(35.2271, -80.8431),
//          zoom: 15,
//          mapTypeId: google.maps.MapTypeId.HYBRID
//     };
//     this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
//  }

//  @ViewChild('map', {static: true}) mapElement: any;
//   map: google.maps.Map;

  // @ViewChild('map') mapElement: any;
  // map: google.maps.Map;

//below was pasted directly from the google directions api site; no idea yet if any will be useful
  // function initMap(): void {
  //   const directionsRenderer = new google.maps.DirectionsRenderer();
  //   const directionsService = new google.maps.DirectionsService();
  //   const map = new google.maps.Map(
  //     document.getElementById("map") as HTMLElement,
  //     {
  //       zoom: 7,
  //       center: { lat: 41.85, lng: -87.65 },
  //       disableDefaultUI: true,
  //     }
  //   );

  //   directionsRenderer.setMap(map);
  //   directionsRenderer.setPanel(
  //     document.getElementById("sidebar") as HTMLElement
  //   );

  //   const control = document.getElementById("floating-panel") as HTMLElement;

  //   map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  //   const onChangeHandler = function () {
  //     calculateAndDisplayRoute(directionsService, directionsRenderer);
  //   };

  //   (document.getElementById("start") as HTMLElement).addEventListener(
  //     "change",
  //     onChangeHandler
  //   );
  //   (document.getElementById("end") as HTMLElement).addEventListener(
  //     "change",
  //     onChangeHandler
  //   );
  // }

  // function calculateAndDisplayRoute(
  //   directionsService: google.maps.DirectionsService,
  //   directionsRenderer: google.maps.DirectionsRenderer
  // ) {
  //   const start = (document.getElementById("start") as HTMLInputElement).value;
  //   const end = (document.getElementById("end") as HTMLInputElement).value;

  //   directionsService
  //     .route({
  //       origin: start,
  //       destination: end,
  //       travelMode: google.maps.TravelMode.DRIVING,
  //     })
  //     .then((response) => {
  //       directionsRenderer.setDirections(response);
  //     })
  //     .catch((e) => window.alert("Directions request failed due to " + status));
  // }

  // declare global {
  //   interface Window {
  //     initMap: () => void;
  //   }
  // }
  // window.initMap = initMap;

}
