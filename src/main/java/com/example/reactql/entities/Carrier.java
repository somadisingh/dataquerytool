package com.example.reactql.entities;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Carrier {
    
    @Id // declares CarrierCode as primary key
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int carriercode;

    private String carriername;

    public Carrier() {
        super();
    }

    public Carrier(int carriercode, String carriername) {
        super();
        this.carriercode = carriercode;
        this.carriername = carriername;
    }


    public int getCarrierCode() {
        return carriercode;
    }

    public void setCarrierCode(int carriercode) {
        this.carriercode = carriercode;
    }

    public String getCarrierName() {
        return carriername;
    }

    public void setCarrierName(String carriername) {
        this.carriername = carriername;
    }

    @Override
    public String toString() {
        return "Carrier Details: CarrierCode=" + carriercode + ", CarrierName=" + carriername + "\n";
    }
        
}
