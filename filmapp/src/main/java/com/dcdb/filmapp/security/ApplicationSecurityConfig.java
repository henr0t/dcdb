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
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.util.concurrent.TimeUnit;

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
//                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/", "index", "css/*", "js/*").permitAll()
                .antMatchers("/api/v1/user/**").hasRole(USER.name())
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/films", true)
                .and()
                .rememberMe().tokenValiditySeconds((int) TimeUnit.DAYS.toSeconds(30))
                .key("somethingverysecured") //key to generate md5
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"))
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID", "remember-me")
                .logoutSuccessUrl("/login");
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("password"))
                .authorities(ADMIN.getGrantedAuthorities())
                .build();

        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder.encode("password"))
                .authorities(USER.getGrantedAuthorities())
                .build();

        UserDetails editor = User.builder()
                .username("editor")
                .password(passwordEncoder.encode("password"))
                .authorities(EDITOR.getGrantedAuthorities())
                .build();

        return new InMemoryUserDetailsManager(
                admin,
                user,
                editor
        );
    }
}
