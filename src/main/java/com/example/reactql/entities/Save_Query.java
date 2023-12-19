package com.example.reactql.entities;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Lob;

@Entity
public class Save_Query {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false, name="Query")
    private String query;

    @Column(nullable = false, name="Description")
    private String description;

    @Column(nullable = false, name="DatabaseName")
    private String dbname;

    public Save_Query() {
        super();
    }

    public Save_Query(Long id, String query, String description, String dbname) {
        super();
        this.id = id;
        this.query = query;
        this.description = description;
        this.dbname = dbname;

    }   

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }

    public void setdbname(String dbname) {
        this.dbname = dbname;
    }

    public String getdbname() {
        return dbname;
    }

    @Override
    public String toString() {
        return "Save_Query Details: id=" + id + ", query=" + query + ", description=" + description + "\n";
    }

    
}
