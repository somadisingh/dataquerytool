package com.example.reactql.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.reactql.entities.User_Info;

public interface UserInfoRepo extends JpaRepository<User_Info, String>{
    // UserInfoRepo findByUsername(String username);
    
}
