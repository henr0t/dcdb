package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.User;
import com.dcdb.filmapp.security.ApplicationUserRole;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);

    User findByAccountId(String accountId);

    User findByRole(ApplicationUserRole role);
}
