package com.example.reactql.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.reactql.entities.Save_Query;


public interface QueryRepo extends JpaRepository<Save_Query, Long> {
    
}
