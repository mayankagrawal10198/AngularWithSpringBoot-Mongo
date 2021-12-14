package com.shoppingStore.productsManagement.util;

public class Address {

    private String address;
    private String state;
    private String city;

    public Address(String address, String state, String city) {
        this.address = address;
        this.state = state;
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}