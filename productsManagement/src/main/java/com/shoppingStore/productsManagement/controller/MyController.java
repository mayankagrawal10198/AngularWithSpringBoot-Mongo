package com.shoppingStore.productsManagement.controller;

import com.shoppingStore.productsManagement.repo.UsersRepository;
import com.shoppingStore.productsManagement.util.NewUser;
import com.shoppingStore.productsManagement.util.ResponseStatus;
import com.shoppingStore.productsManagement.util.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@RestController
public class MyController {

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/newUser")
    public ResponseEntity addUser(@RequestBody NewUser user) {
        user.setId(user.getEmail().toLowerCase());
        user.setPass(passwordEncoder.encode(user.getPass()));
        ResponseStatus res = new ResponseStatus();
        if(this.usersRepository.findByUserId(user.getEmail().toLowerCase())==null) {
            this.usersRepository.save(user);
            res.setMessage("User Added");
            return new ResponseEntity<ResponseStatus>(res,HttpStatus.CREATED);
        }
        else {
            res.setMessage("Already Exists");
            return new ResponseEntity<ResponseStatus>(res,HttpStatus.ALREADY_REPORTED);
        }
    }

    @PostMapping("/user")
    public ResponseEntity<?> getAllUser(@RequestBody User user) {
        NewUser getDetails = this.usersRepository.findByUserId(user.getEmail().toLowerCase());
        ResponseStatus res = new ResponseStatus();
        if(getDetails!=null){
            if(passwordEncoder.matches(user.getPass(), getDetails.getPass())){
                res.setMessage("User Authenticated");
                return new ResponseEntity<ResponseStatus>(res,HttpStatus.ACCEPTED);
            }
            else{
                res.setMessage("Password Incorrect");
                return new ResponseEntity<ResponseStatus>(res,HttpStatus.BAD_REQUEST);
            }
        }
        else {
            res.setMessage("User Not Found");
            return new ResponseEntity<ResponseStatus>(res,HttpStatus.NOT_FOUND);
        }
    }
}
