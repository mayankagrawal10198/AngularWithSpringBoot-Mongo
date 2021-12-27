package com.shoppingStore.productsManagement.util;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.LinkedList;
import java.util.List;

@Document(collection = "items")
public class NewItem {
    @Id
    private String itemId;
    private String name;
    private String shortDesc;
    private String longDesc;
    private String dimensions;
    private String brand;
    private String[] tags;
    private int price;
    //private MultipartFile file;
    private List<ImageDetails> pics = new LinkedList<>();

    public NewItem() {

    }

    public NewItem(String name, String shortDesc, String longDesc, String dimensions, String brand, String[] tags, int price) {
        this.name = name;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.dimensions = dimensions;
        this.brand = brand;
        this.tags = tags;
        this.price = price;
    }

    public String getItemId() {
        return itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public String getLongDesc() {
        return longDesc;
    }

    public void setLongDesc(String longDesc) {
        this.longDesc = longDesc;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public List<ImageDetails> getPics() {
        return pics;
    }

    public void setPic(ImageDetails pic) {
        this.pics.add(pic);
    }
}
