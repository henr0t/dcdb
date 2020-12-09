package com.dcdb.filmapp.rest;

import com.dcdb.filmapp.controller.UserService;
import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    UserService us;

    @PostMapping(path = "/new")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User createUser(@RequestBody User user) {
        System.out.println("Endpoint Called: createUser");
        return us.createUser(user);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public Iterable<User> getAllUsers() {
        System.out.println("Endpoint Called: getAllUsers");
        return us.getAllUsers();
    }

    @GetMapping("/{userid}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User retrieveUser(@PathVariable(value = "userid") String userId) {
        System.out.println("Retrieved user data");
        return us.getUserById(userId);
    }
}
