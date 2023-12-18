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

    private String carriermode;

    public Carrier() {
        super();
    }

    public Carrier(int carriercode, String carriername, String carriermode) {
        super();
        this.carriercode = carriercode;
        this.carriername = carriername;
        this.carriermode = carriermode;
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

    public String getCarrierMode() {
        return carriermode;
    }

    public void setCarrierMode(String carriermode) {
        this.carriermode = carriermode;
    }

    @Override
    public String toString() {
        return "Carrier Details: CarrierCode=" + carriercode + ", CarrierName=" + carriername + ", CarrierMode=" + carriermode + "\n";
    }
        
}
