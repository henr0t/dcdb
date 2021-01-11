package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.Film;
import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository ur;

    public User getUserByUsername(String username) {
        return ur.findByUsername(username);
    }

    public User createUser(User user) {
        return ur.save(user);
    }

    public Iterable<User> getAllUsers() {
        return ur.findAll();
    }

    public User getUserByAccountId(String accountId) {
        return ur.findByAccountId(accountId);
    }

    public List<Film> getWatchlistByAccountId(String accountId) {
        return ur.findByAccountId(accountId).getWatchlist();
    }
}
