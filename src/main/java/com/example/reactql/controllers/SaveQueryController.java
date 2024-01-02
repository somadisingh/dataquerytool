package com.example.reactql.controllers;
// tis controller is for saving and deleting queries
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.example.reactql.entities.Save_Query;
import com.example.reactql.repo.QueryRepo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;


@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.DELETE, RequestMethod.POST})
@RestController
@RequestMapping("/api/query")
public class SaveQueryController {

    // private static final Logger logger = LoggerFactory.getLogger(SaveQueryController.class);
    
    @Autowired
    private QueryRepo queryRepo;

    @PostMapping("/save")
    public ResponseEntity<String>saveQuery(@RequestBody Save_Query save_query) {
        try {
            // logger.info("Received query: " + save_query.getsaveQuery());
            System.out.println(save_query);
            queryRepo.save(save_query);
            return ResponseEntity.ok("Query saved successfully!");
            
        } catch (Exception e) {
            System.out.println("sorry");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving query: " + e.toString());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String>deleteQuery(@PathVariable Long id) {
        try {
            queryRepo.deleteById(id);
            return ResponseEntity.ok("Query deleted successfully!");

            
        } catch (Exception e) {
            System.out.println("sorry");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting query: " + e.toString());
        }
    }
}
