package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.Film;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface FilmRepository extends CrudRepository<Film, Long> {
}
