package com.dcdb.filmapp.rest;

import com.dcdb.filmapp.controller.UserService;
import com.dcdb.filmapp.model.Film;
import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    UserService us;

    @PostMapping(path = "/new/user")
    public User createUser(@RequestBody User user) {
        System.out.println("Endpoint Called: createUser");
        return us.createUser(user);
    }

    @PostMapping(path = "new/admin")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User createAdmin(@RequestBody User user) {
        System.out.println("Endpoint Called: createAdmin");
        return us.createAdmin(user);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public Iterable<User> getAllUsers() {
        System.out.println("Endpoint Called: getAllUsers");
        return us.getAllUsers();
    }

    @GetMapping("/{accountId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN') or (#accountId).equals(authentication.getName())")
    public User getUser(@PathVariable(value = "accountId") String accountId, Authentication authentication) {
        System.out.println("User " + authentication.getName() + " retrieved user data");
        return us.getUserByAccountId(accountId);
    }

    @GetMapping("/{accountId}/watchlist")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN') or (#accountId).equals(authentication.getName())")
    public List<Film> getWatchlist(@PathVariable(value = "accountId") String accountId, Authentication authentication) {
        System.out.println("User " + authentication.getName() + " retrieved user watchlist");
        return us.getWatchlistByAccountId(accountId);
    }
}
