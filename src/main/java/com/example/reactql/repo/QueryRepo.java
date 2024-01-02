package com.example.reactql.repo;
// this repo is for storing queries
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.reactql.entities.Save_Query;


public interface QueryRepo extends JpaRepository<Save_Query, Long> {

    // delete query by id
   void deleteById(Long id);
    
}
