import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { User } from '../user';
import { environment } from 'src/environments/environment.developer'; 
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-view-trip',
  templateUrl: './view-trip.component.html',
  styleUrls: ['./view-trip.component.css']
})
export class ViewTripComponent implements OnInit {

  trips: Trip[] = [];
  user: User[];
  trip: Trip[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    //should call get trip by id ()
    this.tripService.getAllTrips().subscribe((data: Trip[]) => {
      console.log(data);
      this.trips = data;
    });
    let loader = new Loader({
        apiKey: environment.MY_API_KEY,
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
  }

}
