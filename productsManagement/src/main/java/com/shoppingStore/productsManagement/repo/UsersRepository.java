package com.shoppingStore.productsManagement.repo;

import com.shoppingStore.productsManagement.util.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<User, Integer> {

}
