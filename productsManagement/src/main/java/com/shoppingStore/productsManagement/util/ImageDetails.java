package com.shoppingStore.productsManagement.util;

import org.bson.types.Binary;

public class ImageDetails {
    private Binary image;
    private Binary thumbImage;
    private String title;

    public ImageDetails(){

    }

    public ImageDetails(Binary image, Binary thumbImage, String title) {
        this.image = image;
        this.thumbImage = thumbImage;
        this.title = title;
    }

    public Binary getImage() {
        return image;
    }

    public void setImage(Binary image) {
        this.image = image;
    }

    public Binary getThumbImage() {
        return thumbImage;
    }

    public void setThumbImage(Binary thumbImage) {
        this.thumbImage = thumbImage;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
