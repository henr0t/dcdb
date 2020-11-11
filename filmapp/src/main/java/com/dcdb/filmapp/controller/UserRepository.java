package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface UserRepository extends CrudRepository<User, Long> {
}