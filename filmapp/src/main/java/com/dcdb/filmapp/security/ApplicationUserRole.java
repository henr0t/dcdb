package com.dcdb.filmapp.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.dcdb.filmapp.security.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    USER(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(NEWS_READ, NEWS_WRITE, USER_READ, USER_WRITE));

    private final Set<ApplicationUserPermission> permissions;


    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }
}
