package com.shoppingStore.productsManagement.repo;

import com.shoppingStore.productsManagement.util.NewUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UsersRepository extends MongoRepository<NewUser, String> {

    NewUser findByUserId(String s);
}
