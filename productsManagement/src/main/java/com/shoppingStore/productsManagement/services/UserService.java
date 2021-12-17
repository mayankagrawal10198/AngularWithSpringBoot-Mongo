package com.shoppingStore.productsManagement.services;

import com.shoppingStore.productsManagement.repo.UsersRepository;
import com.shoppingStore.productsManagement.util.NewUser;
import com.shoppingStore.productsManagement.util.SecurityUser;
import com.shoppingStore.productsManagement.util.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        NewUser user = usersRepository.findByUserId(userId);
        if(user == null) throw new UsernameNotFoundException(userId);
        String email = user.getEmail();
        String pass = user.getPass();
        return new SecurityUser(new User(email, pass));
    }
}
