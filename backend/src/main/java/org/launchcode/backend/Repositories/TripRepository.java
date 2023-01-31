package org.launchcode.backend.Repositories;

import org.launchcode.backend.models.Trip;
import org.launchcode.backend.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TripRepository extends CrudRepository<Trip, Long> {
    void deleteTripById(Long id);
    Optional<Trip> findTripById(Long id);

    Optional<Trip> findByUser(User user);


}
