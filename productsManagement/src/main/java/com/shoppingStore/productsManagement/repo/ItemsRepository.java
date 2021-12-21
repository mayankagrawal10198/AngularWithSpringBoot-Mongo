package com.shoppingStore.productsManagement.repo;

import com.shoppingStore.productsManagement.util.NewItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ItemsRepository extends MongoRepository<NewItem, String> {

    List<NewItem> findByName(String s);
}
