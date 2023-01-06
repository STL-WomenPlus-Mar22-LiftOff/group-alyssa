package org.launchcode.backend.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class User extends AbstractEntity implements Serializable {

    @NotBlank(message = "user name required")
    @Size(min = 5, max = 15, message = "user name must be between 5 and 15 characters")
    private String username;

    @Email(message = "Invalid Email try again")
    private String email;

    @NotBlank(message = "password required")
    @Size(min = 6)
    private String password;

    @NotBlank(message = "Passwords do not match")
    private String verifyPassword;

    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Trip> trips = new ArrayList<>();


    public User(){}

    public User(String username, String email, String password){
        super();
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }

    public List<Trip> getTrips(){return trips;}

    public void setTrips(List<Trip> trips){this.trips = trips;}


}
