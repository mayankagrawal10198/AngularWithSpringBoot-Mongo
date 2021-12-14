package com.shoppingStore.productsManagement.controller;

import com.shoppingStore.productsManagement.repo.UsersRepository;
import com.shoppingStore.productsManagement.util.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        User newUser = this.usersRepository.save(user);
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllUser() {
        return ResponseEntity.ok(this.usersRepository.findAll());
    }
}
