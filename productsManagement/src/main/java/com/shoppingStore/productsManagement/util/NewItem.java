package com.shoppingStore.productsManagement.util;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "items")
public class NewItem {
    @Id
    private String itemId;
    private String name;
    private String desc;
    private int price;
    private Binary pic;

    public NewItem() {

    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Binary getPic() {
        return pic;
    }

    public void setPic(Binary pic) {
        this.pic = pic;
    }
}
