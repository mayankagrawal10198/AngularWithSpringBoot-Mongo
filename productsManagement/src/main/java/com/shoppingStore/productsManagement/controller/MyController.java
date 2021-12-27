package com.shoppingStore.productsManagement.controller;

import com.shoppingStore.productsManagement.repo.ItemsRepository;
import com.shoppingStore.productsManagement.repo.UsersRepository;
import com.shoppingStore.productsManagement.util.*;
import com.shoppingStore.productsManagement.util.ResponseStatus;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Locale;

@RestController
public class MyController {

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private ItemsRepository itemsRepository;

    @PostMapping("/newUser")
    public ResponseEntity addUser(@RequestBody NewUser user) {
        user.setId(user.getEmail().toLowerCase());
        user.setPass(Base64.getEncoder()
                .encodeToString(user.getPass().getBytes()));
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
            if(getDetails.getPass().equals(Base64.getEncoder()
                    .encodeToString(user.getPass().getBytes()))){
                res.setMessage("User Authenticated/"+getDetails.getName());
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

    @PostMapping("/addItem")
    public ResponseEntity addItems(@RequestBody NewItem newItem) {
        ResponseStatus res = new ResponseStatus();
        //newItem.setPic(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        this.itemsRepository.save(newItem);
        //res.setMessage(Base64.getEncoder().encodeToString(newItem.getPic().getData()));
        res.setMessage("done");
        return new ResponseEntity<ResponseStatus>(res,HttpStatus.ACCEPTED);
    }

    @PostMapping("/addPicsFor/{id}")
    public ResponseEntity addPics(@PathVariable("id") String Id,@RequestParam("itemPics") MultipartFile[] files) throws IOException {
        ResponseStatus res = new ResponseStatus();
        NewItem newItem = this.itemsRepository.findByItemId(Id);
        for(MultipartFile file: files){
            newItem.setPic(new ImageDetails(new Binary(BsonBinarySubType.BINARY, file.getBytes()),new Binary(BsonBinarySubType.BINARY, file.getBytes()),newItem.getName()));
        }
        this.itemsRepository.save(newItem);
        //res.setMessage(Base64.getEncoder().encodeToString(newItem.getPic().getData()));
        res.setMessage(String.valueOf(newItem));
        return new ResponseEntity<ResponseStatus>(res,HttpStatus.ACCEPTED);
    }

    @PostMapping("/updateUserPic/{id}")
    public ResponseEntity updatePic(@PathVariable("id") String Id,@RequestParam("userPic") MultipartFile file) throws IOException {
        ResponseStatus res = new ResponseStatus();
        NewUser newUser = this.usersRepository.findByUserId(Id.toLowerCase());
        newUser.setPic(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        this.usersRepository.save(newUser);
        res.setMessage(Base64.getEncoder().encodeToString(newUser.getPic().getData()));
        //res.setMessage("done");
        return new ResponseEntity<ResponseStatus>(res,HttpStatus.ACCEPTED);
    }

    @GetMapping("getAllItems")
    public ResponseEntity<ArrayList<NewItem>> getItems(){
        return new ResponseEntity<ArrayList<NewItem>>(this.itemsRepository.findAll(), HttpStatus.OK);
    }
}
