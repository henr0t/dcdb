package com.dcdb.filmapp.controller;

import com.dcdb.filmapp.model.Film;
import com.dcdb.filmapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class FilmService {

    @Autowired
    FilmRepository fr;

    @Autowired
    UserRepository ur;

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

    public void addFilmToUser(String tmdbId, String accountId) {
        User user = ur.findByAccountId(accountId);
        Film film = fr.findByTmdbId(tmdbId);
        if (user.getWatchlist().contains(film)) {
            System.out.println("film could not be added");
        } else {
            user.addFilmToWatchlist(film);
        }
    }
}
