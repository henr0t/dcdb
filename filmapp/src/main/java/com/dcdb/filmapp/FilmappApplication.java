package com.dcdb.filmapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FilmappApplication {

    public static void main(String[] args) {
        SpringApplication.run(FilmappApplication.class, args);
        System.out.println("DCDB v1.0 backend is up and running!");
    }

}
