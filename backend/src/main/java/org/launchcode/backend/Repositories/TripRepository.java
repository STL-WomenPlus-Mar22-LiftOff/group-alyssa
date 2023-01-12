package org.launchcode.backend.Repositories;

import org.launchcode.backend.models.Trip;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepository extends CrudRepository<Trip, Integer> {
    void deleteTripById(Long id);
    Trip findById(Long id);


}
