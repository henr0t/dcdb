package com.dcdb.filmapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Film {
    @Id
    private final long filmId;
    private final String filmTitle;


    public Film(long filmId, String filmTitle) {
        this.filmId = filmId;
        this.filmTitle = filmTitle;
    }

    public long getFilmId() {
        return filmId;
    }

    public String getFilmTitle() {
        return filmTitle;
    }
}
