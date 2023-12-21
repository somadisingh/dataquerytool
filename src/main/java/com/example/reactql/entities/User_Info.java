package com.example.reactql.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
public class User_Info {

    //@Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE)
    // private Long id;

    @Id
    @Column(nullable = false, name="Username")
    private String username;

    @Column(nullable = false, name="Password")
    private String password;

    @Column(nullable = false, name="Role")
    private String role;

    public User_Info() {
        super();
    }

    public User_Info(String username, String password, String role) {
        super();
        this.username = username;
        this.password = password;
        this.role = role;

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

    public void setpassword(String password) {
        this.password = password;
    }

    public String getrole() {
        return role;
    }

    public void setrole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User_Info [username=" + username + ", password=" + password + ", role=" + role + "]";
    }
    
}