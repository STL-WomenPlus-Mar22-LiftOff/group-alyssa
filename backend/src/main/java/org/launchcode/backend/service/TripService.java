//package org.launchcode.backend.service;
//
//import org.launchcode.backend.Repositories.TripRepository;
//import org.launchcode.backend.exceptions.TripNotFoundException;
//import org.launchcode.backend.exceptions.UserNotFoundException;
//import org.launchcode.backend.models.Trip;
//import org.launchcode.backend.models.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Iterator;
//import java.util.List;
//
//@Service
//public class TripService {
//
//    @Autowired
//    private final TripRepository tripRepository;
//
//    public TripService(TripRepository tripRepository) {
//        this.tripRepository = tripRepository;
//    }
//
//    public Trip addTrip(Trip trip) {
//        return tripRepository.save(trip);
//    }
//
//    public Iterable<Trip> findAllTrips() {
//       return tripRepository.findAll();
//    }
//
//    public Trip updateTrip(Trip trip) {
//        return tripRepository.save(trip);
//    }
//
//     public Trip findTripById(Long id) {
//         return (Trip) tripRepository.findTripById(id).orElseThrow(() -> new TripNotFoundException("Trip by id " + id + " was not found"));
//     }
//
//        public void deleteTrip (Long id) {
//           tripRepository.deleteTripById(id);
//        }
//
//
//
//}



