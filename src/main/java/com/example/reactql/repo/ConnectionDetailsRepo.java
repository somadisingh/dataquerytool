package com.example.reactql.repo;
// this repo is for storing configured connection details.
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.reactql.entities.ConnectionDetails;

public interface ConnectionDetailsRepo extends JpaRepository<ConnectionDetails, String> {
    
}
