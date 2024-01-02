package com.example.reactql.repo;
// this repo is for storing carriers
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.reactql.entities.Carrier;
import java.util.List;

public interface CarrierRepo extends CrudRepository<Carrier, Integer> {

    public List<Carrier> findByCarriername(String carriername); 
    public List<Carrier> findByCarriercodeAndCarriername(int CarrierCode, String CarrierName);

    @Query(value = "select * FROM carrier", nativeQuery = true)
    public List<Carrier>getAllCarriers();

    //select * from carriers where carriername = 'DHL'
    @Query(value = "select * FROM carrier where carriername = :carriername", nativeQuery = true)
    public List<Carrier>getCarrierByName(String carriername);
}