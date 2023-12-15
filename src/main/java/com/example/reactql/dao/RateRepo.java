package com.example.reactql.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.reactql.entities.Rate;
import java.util.List;

public interface RateRepo extends CrudRepository<Rate, Integer> {
    
    public List<Rate> findByRate(String rate);
    public List<Rate> findByRateidAndRate(int rateid, String rate);

    @Query(value = "select * FROM rate", nativeQuery = true)
    public List<Rate>getAllRates();
}
