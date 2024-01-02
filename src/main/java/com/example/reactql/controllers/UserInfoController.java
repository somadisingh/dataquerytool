package com.example.reactql.controllers;
// this API endpoint(controller) is for validating user credentials
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.Map;
import com.example.reactql.entities.User_Info;
import com.example.reactql.repo.UserInfoRepo;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/api/users")
public class UserInfoController {
    @Autowired
    private UserInfoRepo userInfoRepo;

    @PostMapping("/login")
    public ResponseEntity<String>login(@RequestBody Map<String, String> credentials) {
        
        String username = credentials.get("username");
        String password = credentials.get("password");

        User_Info user_info = userInfoRepo.findById(username).orElse(null);

        if (user_info !=null && user_info.getPassword().equals(password)) {
            return ResponseEntity.ok(user_info.getrole());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials!");
        }

    }

}
