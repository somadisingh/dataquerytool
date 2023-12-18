package com.example.reactql.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import com.example.reactql.entities.TableInfo;

public interface TableInfoRepo extends JpaRepository<TableInfo, String> {

    @Query(value = "show tables", nativeQuery = true)
    public List<TableInfo> getAllTables();
    
}
