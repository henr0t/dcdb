package com.dcdb.filmapp.jwt;

import com.google.common.net.HttpHeaders;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "application.jwt")
public class JwtConfig {

    private String secretKey;
    private String tokenPrefix;
    private Integer tokenExpirationAfterDays;

    public String getSecretKey() {
        return secretKey;
    }

    public void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    public String getTokenPrefix() {
        return tokenPrefix;
    }

    public void setTokenPrefix(String tokenPrefix) {
        this.tokenPrefix = tokenPrefix;
    }

    public Integer gettokenExpirationAfterDays() {
        return tokenExpirationAfterDays;
    }

    public void settokenExpirationAfterDays(Integer tokenExpirationDays) {
        this.tokenExpirationAfterDays = tokenExpirationDays;
    }


    public String getAuthorizationHeader() {
        return HttpHeaders.AUTHORIZATION;
    }
}
