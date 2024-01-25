package com.example.reactql.services;
//this service is for configuring datasource. usage in ConnectionController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.spi.DirStateFactory.Result;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.reactql.entities.DataSourceConfig;
// import com.zaxxer.hikari.HikariConfig;
// import com.zaxxer.hikari.HikariDataSource;

@Service
public class DataSourceConfigService {

    private DataSource dataSource;

    @Autowired
    public DataSourceConfigService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public void configureDatasource(DataSourceConfig config) {
        //HikariConfig hikariConfig = new HikariConfig();
        // hikariConfig.setJdbcUrl(config.getUrl() + "/" + config.getdatabasename());
        // System.out.println("url: " + config.getUrl() + "/" + config.getdatabasename());
        // hikariConfig.setUsername(config.getUsername());
        // hikariConfig.setPassword(config.getPassword());

        // HikariDataSource newDataSource = new HikariDataSource(hikariConfig);
        // System.out.println("newDataSource-----------: " + newDataSource);
        //System.out.println(hikariConfig.getJdbcUrl());
        //DataSourceConfig newDataSource = new DataSourceConfig(config.getUrl(), config.getUsername(), config.getPassword(), config.getdatabasename());
        // String url = config.getUrl() + "/" + config.getdatabasename();
        // String username = config.getUsername();
        // String password = config.getPassword();
        // Test the new connection
        try {
            // Additional configuration or validation if needed
            String url = config.getUrl() + "/" + config.getdatabasename();
            String username = config.getUsername();
            String password = config.getPassword();
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connection successful!");
            System.out.println("datasource in dataconfigservice: " + dataSource);
            DatabaseMetaData metaData = connection.getMetaData();
            //System.out.println("JDBC URL: " + metaData.getURL());
            //System.out.println(metaData.getDatabaseProductName());
            // print the database name 
            System.out.println("Database Product Name: " + metaData.getDatabaseProductName());
            ResultSet rs = metaData.getTables(config.getdatabasename(), null, "%", new String[]{"TABLE"});
            System.out.println("Tables in the database: ");
            while (rs.next()) {
                String tableName = rs.getString("TABLE_NAME");
                System.out.println(tableName);
            }
            //System.out.println("JDBC URL: " + config.getUrl() + "/" + config.getdatabasename());
        } catch (SQLException e) {
            throw new RuntimeException("Error testing the configured datasource", e);
        } finally {
            // Close the new datasource to release resources
            //newDataSource.close();
        }

        // Replace the existing datasource with the new one
        //dataSource = newDataSource;
        System.out.println("datasource: ");
    }
}

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Qualifier;
// import org.springframework.context.annotation.Primary;
// import org.springframework.stereotype.Service;

// import javax.sql.DataSource;
// import java.sql.Connection;
// import java.sql.SQLException;

// import com.example.reactql.entities.DataSourceConfig;
// import com.zaxxer.hikari.HikariConfig;
// import com.zaxxer.hikari.HikariDataSource;

// @Service
// public class DataSourceConfigService {

//     @Autowired
//     @Qualifier("primaryDataSource")
//     private DataSource primaryDataSource;

//     @Primary
//     private DataSource secondaryDataSource;

//     public void configureDatasource(DataSourceConfig config) {
//         HikariConfig hikariConfig = new HikariConfig();
//         hikariConfig.setJdbcUrl(config.getUrl() + "/" + config.getdatabasename());
//         hikariConfig.setUsername(config.getUsername());
//         hikariConfig.setPassword(config.getPassword());

//         HikariDataSource newDataSource = new HikariDataSource(hikariConfig);

//         // Test the new connection
//         try (Connection connection = newDataSource.getConnection()) {
//             System.out.println("Connection successful!");
//             System.out.println("JDBC URL: " + config.getUrl() + "/" + config.getdatabasename());
//         } catch (SQLException e) {
//             throw new RuntimeException("Error testing the configured datasource", e);
//         }

//         // Replace the existing secondaryDataSource with the new one
//         secondaryDataSource = newDataSource;
//         System.out.println("datasource: " + secondaryDataSource);
//     }

//     public DataSource getDataSource() {
//         return secondaryDataSource;
//     }
// }

