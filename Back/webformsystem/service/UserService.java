package com.RTT.webformsystem.service;

import com.RTT.webformsystem.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
