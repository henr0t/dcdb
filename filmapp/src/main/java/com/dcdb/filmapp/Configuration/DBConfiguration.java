package com.dcdb.filmapp.Configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@ConfigurationProperties("spring.datasource")
@SuppressWarnings("unused")
public class DBConfiguration {

    @Profile("dev")
    @Bean
    public String devDatabaseConnection() {
        return "Local DB connection";
    }

    @Profile("prod")
    @Bean
    public String prodDatabaseConnection() {
        return "Heroku PostgreSQL DB connection";
    }


}
