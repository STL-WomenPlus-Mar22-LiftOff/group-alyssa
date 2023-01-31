package org.launchcode.backend.controllers;

import org.launchcode.backend.Repositories.TripRepository;
import org.launchcode.backend.Repositories.UserRepository;
import org.launchcode.backend.models.User;
//import org.launchcode.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TripRepository tripRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

//    private final UserService userService;

//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

    //method to return all users in application
    @GetMapping("")
    public Iterable<User> getAllUsers() {
//        Iterable<User> users = userService.findAllUsers();
        return userRepository.findAll();
//        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("search/{id}")
    public Optional<User> findUserById(@PathVariable("id") Long userId) {
        Optional<User> user = userRepository.findUserById(userId);
        return user;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        User newUser = new User(user.getUsername(), user.getEmail(), user.getPwHash());
        userRepository.save(newUser);
    }

    //    find a user
    @GetMapping("{username}/id")
    public Long getUserId(@PathVariable("username") String username) {
        Optional<User> userData = userRepository.findByUsername(username);
        User foundRegisteredUser = userData.get();
        return foundRegisteredUser.getId();
    }

    //update user
    //Put b/c we are UPDATING, not adding
//    @PutMapping("/update")
//    public ResponseEntity<User> updateUser(@RequestBody User user) {
//        User updateUser = userService.updateUser(user);
//        return new ResponseEntity<>(updateUser, HttpStatus.OK);
//    }

    //delete user
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
//        userService.deleteUser(id);
//        //only returned Http b/c user was deleted so there isn't anything to show
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    //find user by email - used for authentication/login feature
    @PostMapping("authentication")
    public HashMap<String, String> authentication(@RequestBody @Valid User user, Errors errors) {
        //custom query method created, will be added to UserRepository
        Optional<User> userData = userRepository.findByUsername(user.getUsername());

        HashMap<String, String> map = new HashMap<>();

        if (errors.hasErrors()) {
            map.put("status", "errors");
        }

        if (userData.isPresent())   {
            User userInfo = userData.get();
//            if (user.getPassword().equals(userInfo.getPassword()))  {
            if (encoder.matches(user.getPwHash(), userInfo.getPwHash()))    {
                map.put("status", "success");
        } else {
            map.put("status", "failure");
//                map.put("user", user.getPassword());
//                map.put("userInfo", userInfo.getPassword());
        }
//        }   else {
//            map.put("status", "failure");
        }
        return map;
    }

    @GetMapping("{username}")
    public HashMap<String, String> getUserInfo(@PathVariable("username") String username)   {
        Optional<User> userData = userRepository.findByUsername(username);

        HashMap<String, String> map = new HashMap<>();

        if (userData.isPresent())   {
            User user = userData.get();
            map.put("id", Long.toString(user.getId()));
            map.put("username", user.getUsername());
            map.put("email", user.getEmail());
        }
        return map;
    }

    //check if username and/or email already exist in the database
    @GetMapping("/confirm/username")
    public boolean checkUsername(@RequestBody String username) {
        Iterable<User> allUsers = getAllUsers();
        for (User user : allUsers)  {
            if (username.equalsIgnoreCase(user.getUsername()))  {
                return false;
            }
        }   return true;
    }

    @GetMapping("/confirm/email")
    public boolean checkEmail(@RequestBody String email) {
        Iterable<User> allUsers = getAllUsers();
        for (User user : allUsers)  {
            if (email.equalsIgnoreCase(user.getEmail()))  {
                return false;
            }
        }   return true;
    }



}
