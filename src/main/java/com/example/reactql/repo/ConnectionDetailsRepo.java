package com.example.reactql.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.reactql.entities.ConnectionDetails;

public interface ConnectionDetailsRepo extends JpaRepository<ConnectionDetails, String> {
    
}
