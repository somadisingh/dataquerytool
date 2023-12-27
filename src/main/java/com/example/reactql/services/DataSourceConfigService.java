package com.example.reactql.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

import com.example.reactql.entities.DataSourceConfig;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Service
public class DataSourceConfigService {

    @Autowired
    private DataSource dataSource;

    public void configureDatasource(DataSourceConfig config) {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl(config.getUrl() + "/" + config.getdatabasename());
        System.out.println("url: " + config.getUrl() + "/" + config.getdatabasename());
        hikariConfig.setUsername(config.getUsername());
        hikariConfig.setPassword(config.getPassword());

        // Additional HikariCP configuration if needed

        HikariDataSource newDataSource = new HikariDataSource(hikariConfig);

        // Test the new connection
        try (Connection connection = newDataSource.getConnection()) {
            // Additional configuration or validation if needed
            System.out.println("Connection successful!");
            System.out.println("JDBC URL: " + config.getUrl() + "/" + config.getdatabasename());
        } catch (SQLException e) {
            throw new RuntimeException("Error testing the configured datasource", e);
        } finally {
            // Close the new datasource to release resources
            newDataSource.close();
        }

        // Replace the existing datasource with the new one
        dataSource = newDataSource;
        System.out.println("datasource: " + dataSource);
    }
}


