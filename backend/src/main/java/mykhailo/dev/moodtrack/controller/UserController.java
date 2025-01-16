package mykhailo.dev.moodtrack.controller;

import jakarta.validation.Valid;
import mykhailo.dev.moodtrack.dto.UserGetDTO;
import mykhailo.dev.moodtrack.dto.UserPostDTO;
import mykhailo.dev.moodtrack.entity.UserEntity;
import mykhailo.dev.moodtrack.mapper.MapStructMapper;
import mykhailo.dev.moodtrack.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {
    private final MapStructMapper mapStructMapper;
    private final UserService userService;

    public UserController(MapStructMapper mapStructMapper, UserService userService) {
        this.mapStructMapper = mapStructMapper;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserGetDTO>>  findAll() {
        List<UserEntity> userEntities = userService.findAll();
        List<UserGetDTO> userGetDTOs = userEntities
                .stream()
                .map(mapStructMapper::userEntityToUserGetDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(userGetDTOs);
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody UserPostDTO userPostDTO) {
        userService.save(mapStructMapper.userPostDTOToUserEntity(userPostDTO));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
