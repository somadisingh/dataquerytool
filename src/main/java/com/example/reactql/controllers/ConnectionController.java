package com.example.reactql.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMethod;
import com.example.reactql.services.DataSourceConfigService;
import com.example.reactql.entities.DataSourceConfig;


@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/api/connection")
public class ConnectionController {
    
    @Autowired
    private DataSourceConfigService dataSourceConfigService;

    @PostMapping("/configure")
    public ResponseEntity<String> configureDatasource(@RequestBody DataSourceConfig config) {
        
        try {
            dataSourceConfigService.configureDatasource(config);
            return ResponseEntity.ok("Datasource configured successfully!");
            // String n = config.toString();
        } catch (Exception e) {
            e.printStackTrace();
            // System.out.println("details of config: " + config.toString());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error configuring datasource: " + e.toString());
        }
    }
}
