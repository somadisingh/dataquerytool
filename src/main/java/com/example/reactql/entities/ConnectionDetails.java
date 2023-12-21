package com.example.reactql.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ConnectionDetails {

    @Id
    private String url;
    
    private String username;
    private String password;

    public ConnectionDetails() {
        super();
    }

    public ConnectionDetails(String url, String username, String password) {
        super();
        this.url = url;
        this.username = username;
        this.password = password;

    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

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

    @Override
    public String toString() {  
        return "ConnectionDetails [url=" + url + ", username=" + username + ", password=" + password + "]";
    }
        
}
