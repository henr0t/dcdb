package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository ur;

    public User getUserById(long userId) {
        return ur.findById(userId).get();
    }

    public User createUser(User user) {
        return ur.save(user);
    }

    public Iterable<User> getAllUsers() {
        return ur.findAll();
    }
}
