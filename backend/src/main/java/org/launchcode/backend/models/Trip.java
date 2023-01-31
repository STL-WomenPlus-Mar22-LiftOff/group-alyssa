package org.launchcode.backend.models;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
//public class Trip extends AbstractEntity implements Serializable {
public class Trip extends AbstractEntity {

    @NotNull
    @NotBlank(message = "Trip name required")
    private String tripName;

    @NotNull
    @NotBlank(message = "Starting location is required")
    private String startingLocation;

    @NotNull
    @NotBlank(message = "Ending location is required")
    private String endingLocation;

//    @Column(insertable = false, updatable = false)
//    private Long user_id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
//    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    public Trip(String startingLocation, String endingLocation) {
        this.startingLocation = startingLocation;
        this.endingLocation = endingLocation;
    }

    public Trip(String tripName, String startingLocation, String endingLocation, User user) {
        super();
        this.tripName = tripName;
        this.startingLocation = startingLocation;
        this.endingLocation = endingLocation;
        this.user = user;
//        this.user_id = user_id;
    }

    public Trip(){}

    public User getUser(){return user;}

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

//    public Long getUserId() {
//        return user_id;
//    }
//
//    public void setUserId(Long user_id) {
//        this.user_id = user_id;
//    }

}