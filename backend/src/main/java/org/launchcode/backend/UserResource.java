package org.launchcode.backend;

import org.launchcode.backend.Repositories.UserRepository;
import org.launchcode.backend.models.User;
import org.launchcode.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    //method to return all users in application
    @GetMapping("")
    public Iterable<User> getAllUsers() {
        Iterable<User> users = userService.findAllUsers();
        return userRepository.findAll();
//        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("search/id")
    public Optional<User> getUser(@RequestParam User user) {
        Optional<User> userId = userRepository.findUserById(user.getId());
        return userId;
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
    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updateUser = userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    //delete user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        //only returned Http b/c user was deleted so there isn't anything to show
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //find user by email - used for authentication/login feature
    @PostMapping("authentication")
    public HashMap<String, String> authentication(@RequestBody User user) {
        //custom query method created, will be added to UserRepository
        Optional<User> userData = userRepository.findByUsername(user.getUsername());

        HashMap<String, String> map = new HashMap<>();

        if (userData.isPresent()) {
            User userInfo = userData.get();
//            if (user.getPassword().equals(userInfo.getPassword()))  {
            if (encoder.matches(user.getPwHash(), userInfo.getPwHash()))    {
                map.put("status", "success");
        } else {
            map.put("status", "failure");
//                map.put("user", user.getPassword());
//                map.put("userInfo", userInfo.getPassword());
            }
        }   else {
            map.put("status", "failure");
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
    @GetMapping("/confirm/{username}")
    public boolean checkUsername(@PathVariable("username") String username) {
        Iterable<User> allUsers = getAllUsers();
        for (User user : allUsers)  {
            if (username.equalsIgnoreCase(user.getUsername()))  {
                return false;
            }
        }   return true;
    }

    @GetMapping("/confirm/{email}")
    public boolean checkEmail(@PathVariable("email") String email) {
        Iterable<User> allUsers = getAllUsers();
        for (User user : allUsers)  {
            if (email.equalsIgnoreCase(user.getEmail()))  {
                return false;
            }
        }   return true;
    }



}
