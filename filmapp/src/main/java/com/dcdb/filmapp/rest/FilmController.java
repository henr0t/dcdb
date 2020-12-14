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
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_EDITOR')")
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

    @PutMapping("/{filmId}")
    @PreAuthorize("hasAuthority('film:write')")
    public void updateFilm(@PathVariable(value = "filmId") long filmId, @RequestBody Film film) {
        System.out.println("Endpoint Called: updateFilm");
        fs.updateFilm(filmId, film);
    }

    @DeleteMapping("/{filmId}")
    @PreAuthorize("hasAuthority('film:write')")
    public void deleteFilm(@PathVariable(value = "filmId") long filmId) {
        System.out.println("Endpoint Called: deleteFilm");
        fs.deleteFilm(filmId);
    }

//    @PutMapping("/{}/{}")
//    @PreAuthorize("hasAnyRole('ROLE_ADMIN') or (#accountId).equals(authentication.getName())")
//    public addFilmToUser(@PathVariable(value = "filmid") long filmId, @PathVariable(value = "userid")) {
//
//    }
}
