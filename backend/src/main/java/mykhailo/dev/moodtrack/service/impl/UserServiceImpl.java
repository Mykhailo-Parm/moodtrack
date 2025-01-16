package mykhailo.dev.moodtrack.service.impl;

import mykhailo.dev.moodtrack.entity.UserEntity;
import mykhailo.dev.moodtrack.repository.UserRepository;
import mykhailo.dev.moodtrack.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserEntity> findAll() {
        return new ArrayList<>(userRepository.findAll());
    }

    @Override
    public void save(UserEntity userEntity) {
        userRepository.save(userEntity);
    }
}
