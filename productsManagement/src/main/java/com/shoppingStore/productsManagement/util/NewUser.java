package com.shoppingStore.productsManagement.util;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class NewUser {
    @Id
    private String userId;
    private String name;
    private String email;
    private String pass;
    private Dob dob;
    //private Address address;

    public NewUser(String name, String email, String pass, Dob dob){    //, Address address) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.dob = dob;
        //this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getId() {
        return userId;
    }

    public void setId(String id) {
        this.userId = id;
    }

        public Dob getDob() {
        return dob;
    }

    public void setDob(Dob dob) {
        this.dob = dob;
    }

//    public Address getAddress() {
//        return address;
//    }
//
//    public void setAddress(Address address) {
//        this.address = address;
//    }
}
