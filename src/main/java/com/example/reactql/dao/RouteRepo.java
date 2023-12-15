package com.example.reactql.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.reactql.entities.Route;
import java.util.List;

public interface RouteRepo extends CrudRepository<Route, Integer> {

    public List<Route> findByOrigin(String origin); 
    public List<Route> findByRouteidAndOrigin(int routeid, String origin);

    @Query(value = "select * FROM route", nativeQuery = true)
    public List<Route>getAllRoutes();
}