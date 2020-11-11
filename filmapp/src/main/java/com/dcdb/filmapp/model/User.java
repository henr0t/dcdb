package com.dcdb.filmapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class User {
    @Id
    private long userId;
    private String username;

    public User(long userId, String username) {
        this.userId = userId;
        this.username = username;
    }

    public long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

}
