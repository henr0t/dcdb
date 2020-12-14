package com.dcdb.filmapp.model;

import com.dcdb.filmapp.security.ApplicationUserRole;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;
    private String email;
    private String password;
    private String accountId;
    private ApplicationUserRole role;


    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "User_Film",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "film_id", referencedColumnName = "id")}
    )
    private List<Film> watchlist = new ArrayList<>();

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ApplicationUserRole getRole() {
        return role;
    }

    public void setRole(ApplicationUserRole role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAcountId(String accountId) {
        this.accountId = accountId;
    }

    public List<Film> getWatchlist() {
        return watchlist;
    }

    public void setWatchlist(List<Film> watchlist) {
        this.watchlist = watchlist;
    }
}