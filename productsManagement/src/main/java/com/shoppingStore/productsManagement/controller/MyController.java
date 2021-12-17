package com.shoppingStore.productsManagement.controller;

import com.shoppingStore.productsManagement.repo.UsersRepository;
import com.shoppingStore.productsManagement.util.NewUser;
import com.shoppingStore.productsManagement.util.NewUserModel;
import com.shoppingStore.productsManagement.util.ResponseStatus;
import com.shoppingStore.productsManagement.util.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/newUser")
    public ResponseEntity addUser(@RequestBody NewUserModel user) {
        NewUser newUser = new NewUser();
        newUser.setId(user.getEmail().toLowerCase());
        newUser.setPass(bCryptPasswordEncoder.encode(user.getPass()));
        newUser.setDob(user.getDob());
        newUser.setEmail(user.getEmail());
        newUser.setName(user.getName());
        ResponseStatus res = new ResponseStatus();
        if(this.usersRepository.findByUserId(user.getEmail().toLowerCase())==null) {
            this.usersRepository.save(newUser);
            res.setMessage("User Added");
            return new ResponseEntity<ResponseStatus>(res,HttpStatus.CREATED);
        }
        else {
            res.setMessage("Already Exists");
            return new ResponseEntity<ResponseStatus>(res,HttpStatus.ALREADY_REPORTED);
        }
    }

    @PostMapping("/user")
    public ResponseEntity getAllUser(@RequestBody User user) {
        NewUser getDetails = this.usersRepository.findByUserId(user.getEmail().toLowerCase());
        if(getDetails!=null) {
            return new ResponseEntity<>(getDetails,HttpStatus.OK);
        }
        else{
            return new ResponseEntity("User not", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/check")
    public ResponseEntity reachSecureEndpoint() {

        return new ResponseEntity("If your are reading this you reached a secure endpoint", HttpStatus.OK);
    }

}
