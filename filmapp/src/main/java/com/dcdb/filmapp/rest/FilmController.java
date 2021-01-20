package com.dcdb.filmapp.rest;

import com.dcdb.filmapp.controller.FilmService;
import com.dcdb.filmapp.model.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/film")
public class FilmController {

    @Autowired
    FilmService fs;

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('film:read')")
    public Iterable<Film> getAllFilms() {
        System.out.println("Endpoint Called: getAllFilm");
        return fs.getAllFilms();
    }

    @PostMapping("/new")
    @PreAuthorize("hasAuthority('film:write')")
    public Film addNewFilm(@RequestBody Film film) {
        System.out.println("Endpoint Called: addNewFilm");
        return fs.addNewFilm(film);
    }

    @PutMapping("/{filmid}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public void updateFilm(@PathVariable(value = "filmid") long filmId, @RequestBody Film film) {
        System.out.println("Endpoint Called: updateFilm");
        fs.updateFilm(filmId, film);
    }

    @DeleteMapping("/{filmid}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public void deleteFilm(@PathVariable(value = "filmid") long filmId) {
        System.out.println("Endpoint Called: deleteFilm");
        fs.deleteFilm(filmId);
    }

    @PutMapping("/{tmdbid}/{accountid}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN') or (#accountId).equals(authentication.getName())")
    public void addFilmToUser(@PathVariable(value = "tmdbid") String tmdbId, @PathVariable(value = "accountid") String accountId) {
        System.out.println("Added film " + tmdbId + " to watchlist of user " + accountId);
        fs.addFilmToUser(tmdbId, accountId);
    }

    @PutMapping("/{tmdbid}/{accountid}/remove")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN') or (#accountId).equals(authentication.getName())")
    public void removeFilmFromUser(@PathVariable(value = "tmdbid") String tmdbId, @PathVariable(value = "accountid") String accountId) {
        System.out.println("Removed film " + tmdbId + " from watchlist of user " + accountId);
        fs.removeFilmFromUser(tmdbId, accountId);
    }
}
