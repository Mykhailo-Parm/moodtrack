package mykhailo.dev.moodtrack.service;

import mykhailo.dev.moodtrack.entity.UserEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface UserService {

    List<UserEntity> findAll();
    void save(UserEntity userEntity);
}
