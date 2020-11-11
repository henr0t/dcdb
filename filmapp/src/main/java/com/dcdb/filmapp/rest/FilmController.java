package com.dcdb.filmapp.rest;

import com.dcdb.filmapp.controller.FilmService;
import com.dcdb.filmapp.model.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/films")
public class FilmController {

    @Autowired
    FilmService fs;

    private static final List<Film> FILMS = Arrays.asList(
            new Film(1, "Man of Steel"),
            new Film(2, "Batman v Superman: Dawn of Justice"),
            new Film(3, "Suicide Squad"));

    @GetMapping(path = "/{filmId}")
    public Film getFilmById(@PathVariable("filmId") long filmId) {
        System.out.println("Endpoint Called: getFilmbyId");
        return FILMS.stream()
                .filter(film -> filmId == (film.getFilmId()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("Film " + filmId + " Does not exist"));
    }
}
