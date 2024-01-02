package com.example.reactql.controllers;
// this controller allows user to configure connection details(admin only) and connect to saved connections(both admin and user)
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
import com.example.reactql.entities.ConnectionDetails;
import com.example.reactql.services.ConnectionDetailsService;


@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/api/connection")
public class ConnectionController {
    
    @Autowired
    private DataSourceConfigService dataSourceConfigService;
    @Autowired
    private ConnectionDetailsService connectionDetailsService;

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

    @PostMapping("/save")
    public ResponseEntity<String> saveConnectionDetails(@RequestBody ConnectionDetails config) {
        try {
            ConnectionDetails savedConfig = connectionDetailsService.saveConnectionDetails(config);
            System.out.println("Connection details saved successfully. ID: " + savedConfig.getUrl());
            return ResponseEntity.ok("Datasource configured successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            // System.out.println("details of config: " + config.toString());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error configuring datasource: " + e.toString());
        }
    }
}
