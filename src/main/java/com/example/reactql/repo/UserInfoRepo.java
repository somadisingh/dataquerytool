package com.example.reactql.repo;
// this repo is for storing user info
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.reactql.entities.User_Info;

public interface UserInfoRepo extends JpaRepository<User_Info, String>{
    // UserInfoRepo findByUsername(String username);
    
}

// what is the purpose of a repository?
// A repository is a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects.

// what is the purpose of a JpaRepository?
// JpaRepository is JPA specific extension of Repository. It contains the full API of CrudRepository and PagingAndSortingRepository.

// what is the purpose of a CrudRepository?
// CrudRepository provides CRUD functions. CrudRepository is a Spring data interface and to use it we need to create our interface by extending CrudRepository.

// what is the difference between JpaRepository and CrudRepository?
// CrudRepository provides CRUD functions. JpaRepository provides some JPA-related methods such as flushing the persistence context and deleting records in a batch.