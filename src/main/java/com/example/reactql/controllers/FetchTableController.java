package com.example.reactql.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.reactql.services.TableInfoService;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/api")
public class FetchTableController {

    private final TableInfoService tableInfoService;

    @Autowired
    public FetchTableController(TableInfoService tableInfoService) {
        this.tableInfoService = tableInfoService;
    }

    @PostMapping("/getTableNames") 
    public List<String> getAllTableNames() {
        return tableInfoService.getAllTableNames();
    }
    
}
