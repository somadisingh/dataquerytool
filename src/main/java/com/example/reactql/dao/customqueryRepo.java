package com.example.reactql.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.reactql.entities.Carrier;
import java.util.List;

public interface customqueryRepo extends JpaRepository<Carrier, Integer> {
    String ep = "select * from carrier where carriername like :prefix%";
    @Query(value=ep, nativeQuery=true)
    List<Carrier> findByCustomCondition(@Param("prefix") String prefix);
}

//select * from carriers where carriername = 'DHL'