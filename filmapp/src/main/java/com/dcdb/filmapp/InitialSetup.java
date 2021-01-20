package com.dcdb.filmapp;

import com.dcdb.filmapp.controller.FilmRepository;
import com.dcdb.filmapp.controller.UserRepository;
import com.dcdb.filmapp.model.User;
import com.dcdb.filmapp.security.AccountIdConfig;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

import static com.dcdb.filmapp.security.ApplicationUserRole.*;

@Component
public class InitialSetup {
    private final PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository ur;

    @Autowired
    AccountIdConfig uc;

    public InitialSetup(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }


    @EventListener
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {
        if (ur.findByRole(ADMIN) == null) {
            System.out.println("Initial Admin created");
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("password"));
            admin.setRole(ADMIN);
            admin.setEmail("admin@dcdb.com");
            admin.setAcountId(uc.generateAccountId(25));
            ur.save(admin);
        }
    }
}
