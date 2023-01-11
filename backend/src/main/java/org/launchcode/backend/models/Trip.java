package org.launchcode.backend.models;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
public class Trip extends AbstractEntity {

    @NotBlank(message = "trip name required")
    private String tripName;

    @NotBlank(message = "starting location coordinate required")
    private String startingLocation;

    @NotBlank(message = "ending location coordinate required")
    private String endingLocation;

    public Trip() {
    }

    public Trip(String tripName, String startingLocation, String endingLocation) {

        this.tripName = tripName;
        this.startingLocation = startingLocation;
        this.endingLocation = endingLocation;
    }


    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public String getStartingLocation() {
        return startingLocation;
    }

    public void setStartingLocation(String startingLocation) {
        this.startingLocation = startingLocation;
    }

    public String getEndingLocation() {
        return endingLocation;
    }

    public void setEndingLocation(String endingLocation) {
        this.endingLocation = endingLocation;
    }

}