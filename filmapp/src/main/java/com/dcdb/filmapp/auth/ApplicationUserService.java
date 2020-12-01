package com.dcdb.filmapp.auth;

import com.dcdb.filmapp.controller.UserRepository;
import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ApplicationUserService implements UserDetailsService {

    @Autowired
    UserRepository ur;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = ur.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("Username %s not found ", username));
        }
        return new MyUserPrincipal(user);
    }
}
