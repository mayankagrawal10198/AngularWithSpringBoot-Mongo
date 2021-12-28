package com.shoppingStore.productsManagement.util;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Document(collection = "users")
public class NewUser {
    @Id
    private String userId;
    private String name;
    private String email;
    private String pass;
    private Dob dob;
    private Binary pic;
    //private Address address;
    private List<NewItem> cart = new LinkedList<>();
    private List<NewItem> fav = new LinkedList<>();
    public NewUser() {

    }

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


    public Binary getPic() {
        return pic;
    }

    public void setPic(Binary pic) {
        this.pic = pic;
    }
}
