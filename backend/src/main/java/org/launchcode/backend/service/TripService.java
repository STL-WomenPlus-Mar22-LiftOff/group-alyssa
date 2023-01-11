package org.launchcode.backend.service;

import org.launchcode.backend.Repositories.TripRepository;
import org.launchcode.backend.models.Trip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripService {

    @Autowired
    private final TripRepository tripRepository;

    public TripService(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    public Trip addTrip(Trip trip) {
        return tripRepository.save(trip);
    }

    public Iterable<Trip> findAllTrips() {
       return tripRepository.findAll();
    }

    public Trip updateTrip(Trip trip) {
        return tripRepository.save(trip);
    }

     public Trip findById(Long id){
          return tripRepository.findById(id);}

    //.orElseThrow(() -> new TripNotFoundException("Trip by id " + id + " was not found"));

        public void deleteTrip (Long id) {
           tripRepository.deleteTripById(id);
        }



}



