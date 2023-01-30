package org.launchcode.backend.models;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;


@Entity
public class User extends AbstractEntity {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @NotBlank(message = "Username required")
    @NotNull
    @Size(min = 5, max = 20, message = "Invalid username. Must be between 5 and 20 characters")
    private String username;

    @Email
    @NotBlank
    @NotNull
    private String email;

    @NotNull
    private String pwHash;

    @OneToMany(mappedBy = "user")
//    @JoinColumn(name = "user_id")
    private final List<Trip> trips = new ArrayList<>();

    public User(String username, String email, String password){
//        super();
        this.username = username;
        this.email = email;
        this.pwHash = encoder.encode(password);
    }

    public User(String username, String password)   {
        this.username = username;
        this.pwHash = password;
    }

    //original constructor
//    public User(String username, String email, String password, String verifyPassword){
//        super();
//        this.username = username;
//        this.email = email;
////        this.password = encoder.encode(password);
//        this.password = password;
//        this.verifyPassword = verifyPassword;
//    }

    public User(){}

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

    public boolean isMatchingPassword(String password){ return encoder.matches(password, pwHash);}

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    public List<Trip> getTrips(){return trips;}

}
