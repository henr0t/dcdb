package com.dcdb.filmapp.rest;

import com.dcdb.filmapp.controller.UserService;
import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    UserService us;

    private static final List<User> USER = Arrays.asList(
            new User(1, "John Smith"),
            new User(2, "John Doe"),
            new User(3, "Jane Doe"));

    @GetMapping(path = "/{userId}")
    public User getUserById(@PathVariable("userId") long userId) {
        System.out.println("Endpoint Called: getUserbyId");
        return USER.stream()
                .filter(user -> userId == (user.getId()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("User " + userId + " Does not exist"));
    }
}
