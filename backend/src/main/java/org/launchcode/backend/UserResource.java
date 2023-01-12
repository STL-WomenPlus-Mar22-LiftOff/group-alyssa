package org.launchcode.backend;

import org.launchcode.backend.Repositories.UserRepository;
import org.launchcode.backend.models.User;
import org.launchcode.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    private final UserService userService;

    public UserResource(UserService userService){
        this.userService = userService;
    }

    //method to return all users in application
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("")
    void addUser(@RequestBody User user)    {
        User newUser = new User(user.getUsername(), user.getEmail(), user.getPassword(), user.getVerifyPassword());
        userRepository.save(newUser);
    }

    //find a user
    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id){
        User user = userService.findUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //add user
    //Post b/c we are changing things on backend
    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User updateUser = userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    //delete employee
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
        //only returned Http b/c user was deleted so there isn't anything to show
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //find user by email - used for authentication/login feature
    @PostMapping("authentication")
    public HashMap<String, String> authenticate (@RequestBody User user)    {
        //custom query method created, will be added to UserRepository
        Optional<User> userData = userRepository.findUserByUsername(user.getUsername());

        HashMap<String, String> map = new HashMap<>();

        if (userData.isPresent())   {
            User userInfo = userData.get();
            if (user.getPassword().equals(userInfo.getPassword()))  {
                map.put("status", "success");
            }   else {
                map.put("status", "failure");
            }
        }   else {
            map.put("status", "failure");
        }
        return map;
    }



}
