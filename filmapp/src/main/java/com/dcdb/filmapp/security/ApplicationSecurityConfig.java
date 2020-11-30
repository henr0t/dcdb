package com.dcdb.filmapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import static com.dcdb.filmapp.security.ApplicationUserPermission.*;
import static com.dcdb.filmapp.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true) //preAuthorize()
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .authorizeRequests()
                .antMatchers("/", "index", "css/*", "js/*").permitAll()
                .antMatchers("/api/v1/user/**").hasRole(USER.name())
//                .antMatchers(HttpMethod.DELETE, "/api/v1/film/**").hasAnyAuthority(FILM_WRITE.getPermission())
//                .antMatchers(HttpMethod.POST, "/api/v1/film/**").hasAnyAuthority(FILM_WRITE.getPermission())
//                .antMatchers(HttpMethod.PUT, "/api/v1/film/**").hasAnyAuthority(FILM_WRITE.getPermission())
//                .antMatchers(HttpMethod.GET, "/api/v1/film/**").hasAnyRole(ADMIN.name(), EDITOR.name())
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("password"))
//                .roles(ADMIN.name()) //ROLE_ADMIN
                .authorities(ADMIN.getGrantedAuthorities())
                .build();

        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder.encode("password"))
//                .roles(USER.name())
                .authorities(USER.getGrantedAuthorities())
                .build();

        UserDetails editor = User.builder()
                .username("editor")
                .password(passwordEncoder.encode("password"))
//                .roles(EDITOR.name())
                .authorities(EDITOR.getGrantedAuthorities())
                .build();

        return new InMemoryUserDetailsManager(
                admin,
                user,
                editor
        );
    }
}
