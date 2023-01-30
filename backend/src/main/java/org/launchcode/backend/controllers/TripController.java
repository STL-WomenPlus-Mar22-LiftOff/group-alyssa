package org.launchcode.backend.controllers;

import org.launchcode.backend.Repositories.TripRepository;
import org.launchcode.backend.Repositories.UserRepository;
import org.launchcode.backend.models.Trip;
import org.launchcode.backend.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/trip")
public class TripController {

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private UserRepository userRepository;

    private final TripService tripService;

    public TripController(TripService tripService){ this.tripService = tripService;}


    //method to return all trips in application
    @GetMapping("")
    public Iterable<Trip> getAllTrips(){
        Iterable <Trip> trips = tripService.findAllTrips();
        return tripRepository.findAll();
//        return new ResponseEntity<>(trips, HttpStatus.OK);
    }

    //add a trip
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void addTrip(@RequestBody Trip trip)    {
        Trip newTrip = new Trip(trip.getTripName(), trip.getStartingLocation(), trip.getEndingLocation(), trip.getUser());
        tripRepository.save(newTrip);
    }

    // find a trip
    @GetMapping("/find/{id}")
    public ResponseEntity<Trip> getTripById(@PathVariable("id") Long id){
       Trip trip = tripService.findTripById(id);
        return new ResponseEntity<>(trip, HttpStatus.OK);
    }


    //Post b/c we are changing things on backend
    @PutMapping("/update")
    public ResponseEntity<Trip> updateTrip(@RequestBody Trip trip){
       Trip updateTrip = tripService.updateTrip(trip);
        return new ResponseEntity<>(updateTrip, HttpStatus.OK);
    }

    //delete trip
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTrip(@PathVariable("id") Long id){
       tripService.deleteTrip(id);
        //only returned Http b/c user was deleted so there isn't anything to show
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

