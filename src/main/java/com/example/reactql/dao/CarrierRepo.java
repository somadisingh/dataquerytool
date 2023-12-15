package com.example.reactql.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.reactql.entities.Carrier;
import java.util.List;

public interface CarrierRepo extends CrudRepository<Carrier, Integer> {

    public List<Carrier> findByCarriername(String carriername); 
    public List<Carrier> findByCarriercodeAndCarriername(int CarrierCode, String CarrierName);

    @Query(value = "select * FROM carrier", nativeQuery = true)
    public List<Carrier>getAllCarriers();
}