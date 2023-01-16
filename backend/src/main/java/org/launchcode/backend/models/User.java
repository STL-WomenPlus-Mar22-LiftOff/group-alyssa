package org.launchcode.backend.models;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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

    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Trip> trips = new ArrayList<>();

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public User(){}

    public User(String username, String email, String password){
        super();
        this.username = username;
        this.email = email;
        this.password = encoder.encode(password);
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
        this.password = encoder.encode(password);
    }

    public boolean isMatchingPassword(String password){ return encoder.matches(password, this.password);}

    public List<Trip> getTrips(){return trips;}

    public void setTrips(List<Trip> trips){this.trips = trips;}


}
