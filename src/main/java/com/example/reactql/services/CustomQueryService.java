package com.example.reactql.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class CustomQueryService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CustomQueryService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> runCustomQuery(String sql) {
        // System.out.println(sql+"----___________------");
        return jdbcTemplate.queryForList(sql);
    }
}
