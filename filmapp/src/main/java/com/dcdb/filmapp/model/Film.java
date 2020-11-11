package com.dcdb.filmapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Film {
    @Id
    private long filmId;
    private String filmTitle;


    public long getFilmId() {
        return filmId;
    }

    public void setFilmId(long filmId) {
        this.filmId = filmId;
    }

    public void setFilmTitle(String filmTitle) {
        this.filmTitle = filmTitle;
    }

    public String getFilmTitle() {
        return filmTitle;


    }
}
