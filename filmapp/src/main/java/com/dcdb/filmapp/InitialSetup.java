package com.dcdb.filmapp;

import com.dcdb.filmapp.controller.FilmRepository;
import com.dcdb.filmapp.controller.UserRepository;
import com.dcdb.filmapp.model.Film;
import com.dcdb.filmapp.model.User;
import com.dcdb.filmapp.security.AccountIdConfig;
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

    //temp
    @Autowired
    FilmRepository fr;

    @Autowired
    AccountIdConfig uc;

    public InitialSetup(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }


    @EventListener
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {
        if (ur.findByUsername("admin") == null) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("password"));
            admin.setRole(ADMIN);
            admin.setEmail("admin@dcdb.com");
            admin.setAcountId(uc.generateAccountId(25));
            ur.save(admin);
        }

        if (ur.findByUsername("editor") == null) {
            User editor = new User();
            editor.setUsername("editor");
            editor.setPassword(passwordEncoder.encode("password"));
            editor.setRole(EDITOR);
            editor.setEmail("editor@dcdb.com");
            editor.setAcountId(uc.generateAccountId(25));
            ur.save(editor);
        }

        if (ur.findByUsername("user") == null) {
            User user = new User();
            user.setUsername("user");
            user.setPassword(passwordEncoder.encode("password"));
            user.setRole(USER);
            user.setEmail("user@dcdb.com");
            user.setAcountId(uc.generateAccountId(25));
            ur.save(user);
        }
    }
}
