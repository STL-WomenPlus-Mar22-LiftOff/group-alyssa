package org.launchcode.backend.models;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
public class Trip extends AbstractEntity implements Serializable {

    @NotNull
//    @NotBlank(message = "trip name required")
    private String tripName;

    @NotNull
//    @NotBlank(message = "starting location coordinate required")
    private String startingLocation;

    @NotNull
//    @NotBlank(message = "ending location coordinate required")
    private String endingLocation;

    @Column(insertable = false, updatable = false)
    private Long user_id;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    public Trip(){}

    public Trip(String tripName, String startingLocation, String endingLocation, Long user_id) {
        super();
//        this.user = user;
        this.tripName = tripName;
        this.startingLocation = startingLocation;
        this.endingLocation = endingLocation;
        this.user_id = user_id;
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

    public User getUser(){return user;}

    public void setUser(User user){this.user = user;}

    public Long getUserId() {
        return user_id;
    }

    public void setUserId(Long user_id) {
        this.user_id = user_id;
    }


}