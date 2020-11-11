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


}
