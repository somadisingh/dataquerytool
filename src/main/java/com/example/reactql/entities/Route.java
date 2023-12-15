package com.example.reactql.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Route {

    @Id
    //@Column(name = "routeid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int routeid;

    @ManyToOne
    @JoinColumn(name = "carriercode", referencedColumnName = "carriercode")
    private Carrier carrier;

    private String origin;
    private String destination;

    public Route() {
        super();
    }

    public Route(int routeid, Carrier carrier, String origin, String destination) {
        super();
        this.routeid = routeid;
        this.carrier = carrier;
        this.origin = origin;
        this.destination = destination;

    }

    public int getRouteid() {
        return routeid;
    }

    public void setRouteid(int routeid) {
        this.routeid = routeid;
    }

    public Carrier getCarrier() {
        return carrier;
    }

    public void setCarrier(Carrier carrier) {
        this.carrier = carrier;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    @Override
    public String toString() {

        return "Route Details: routeid=" + routeid + ", carriercode=" + carrier.getCarrierCode() + ", origin=" + origin + ", destination="
                + destination + "\n";
    }


}
