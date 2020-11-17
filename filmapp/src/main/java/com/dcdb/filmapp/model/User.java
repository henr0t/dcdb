package com.dcdb.filmapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class User {
    @Id
    private long id;
    private String username;

    public User(long id, String username) {
        this.id = id;
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

}
