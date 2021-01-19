package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.Film;
import com.dcdb.filmapp.model.User;
import com.dcdb.filmapp.security.AccountIdConfig;
import com.dcdb.filmapp.security.ApplicationUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {
    private final PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository ur;

    @Autowired
    AccountIdConfig uc;

    public UserService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public User getUserByUsername(String username) {
        return ur.findByUsername(username);
    }

    public User createUser(User user) {
        User newUser = new User();

        newUser.setRole(ApplicationUserRole.USER);
        newUser.setAcountId(uc.generateAccountId(25));
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        return ur.save(newUser);
    }

    public User createAdmin(User user) {

        User newAdmin = new User();

        newAdmin.setRole(ApplicationUserRole.ADMIN);
        newAdmin.setAcountId(uc.generateAccountId(25));
        newAdmin.setEmail(user.getEmail());
        newAdmin.setUsername(user.getUsername());
        newAdmin.setPassword(passwordEncoder.encode(user.getPassword()));
        return ur.save(newAdmin);
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
