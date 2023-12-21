package com.example.reactql.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.reactql.entities.ConnectionDetails;
import com.example.reactql.repo.ConnectionDetailsRepo;

@Service
public class ConnectionDetailsService {

    @Autowired
    private ConnectionDetailsRepo connectionDetailsRepository;

    public ConnectionDetails saveConnectionDetails(ConnectionDetails connectionDetails) {
        return connectionDetailsRepository.save(connectionDetails);
    }
}
