package com.example.reactql.services;
// this service is for running custom queries. usage in CustomQueryController.java
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class CustomQueryService {

    private final JdbcTemplate jdbcTemplate;

    public CustomQueryService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> runCustomQuery(String sql) {
        return jdbcTemplate.queryForList(sql);
    }
}
