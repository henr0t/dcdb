package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class FilmService {

    @Autowired
    FilmRepository fr;

    public Film getFilmById(long filmId) {
        return fr.findById(filmId).get();
    }
}
