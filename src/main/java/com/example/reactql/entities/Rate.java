package com.example.reactql.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int rateid;

    @ManyToOne
    @JoinColumn(name = "routeid", referencedColumnName = "routeid")
    private Route route;

    private String rate;

    public Rate() {
        super();
    }

    public Rate(int rateid, Route route, String rate) {
        super();
        this.rateid = rateid;
        this.route = route;
        this.rate = rate;
    }

    public int getRateid() {
        return rateid;
    }

    public void setRateid(int rateid) {
        this.rateid = rateid;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {

        return "Rate Details: RateId=" + rateid + ", RouteId=" + route.getRouteid() + ", Rate=" + rate + "\n";
    }

}
