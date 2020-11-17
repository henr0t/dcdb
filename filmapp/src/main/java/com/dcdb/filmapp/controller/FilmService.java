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

    public Film addNewFilm(Film film) {
        return fr.save(film);
    }

    public Film updateFilm(long filmId, Film film) {
        Film updatefilm = getFilmById(filmId);
        updatefilm.setTitle(film.getTitle());
        return fr.save(updatefilm);
    }

    public void deleteFilm(long filmId) {
        Film film = getFilmById(filmId);
        fr.delete(film);
    }


    public Iterable<Film> getAllFilms() {
        return fr.findAll();
    }
}
