package com.example.reactql.controllers;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.reactql.services.CustomQueryService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/api/customquery")
public class CustomQueryController {

    private final CustomQueryService customQueryService;

   // @Autowired
    public CustomQueryController(CustomQueryService customQueryService) {
        this.customQueryService = customQueryService;
    }

    @PostMapping("/execute")
    public List<Map<String, Object>> executeCustomQuery(@RequestBody String sql) {
        sql = sql.substring(8, sql.length() - 2);

        return customQueryService.runCustomQuery(sql);
    }
}
