package mykhailo.dev.moodtrack.controller;

import jakarta.validation.Valid;
import mykhailo.dev.moodtrack.dto.MoodEntryGetDTO;
import mykhailo.dev.moodtrack.dto.MoodEntryPostDTO;
import mykhailo.dev.moodtrack.entity.MoodEntryEntity;
import mykhailo.dev.moodtrack.mapper.MapStructMapper;
import mykhailo.dev.moodtrack.service.MoodEntryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/mood-entries")
@CrossOrigin(origins = "http://localhost:3000")
public class MoodEntryController {
    private final MapStructMapper mapStructMapper;
    private final MoodEntryService moodEntryService;

    public MoodEntryController(MapStructMapper mapStructMapper, MoodEntryService moodEntryService) {
        this.mapStructMapper = mapStructMapper;
        this.moodEntryService = moodEntryService;
    }

    @GetMapping
    public ResponseEntity<List<MoodEntryGetDTO>> findAll() {
        List<MoodEntryEntity> moodEntryEntities = moodEntryService.findAll();
        List<MoodEntryGetDTO> moodEntryGetDTOs = moodEntryEntities
                .stream()
                .map(mapStructMapper::moodEntryEntityToMoodEntryGetDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(moodEntryGetDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MoodEntryGetDTO> findOne(@Valid @PathVariable Long id) {
        Optional<MoodEntryEntity> moodEntryEntity = moodEntryService.findOneById(id);

        if (moodEntryEntity.isPresent()) {
            MoodEntryGetDTO moodEntryGetDTO = mapStructMapper.moodEntryEntityToMoodEntryGetDTO(moodEntryEntity.get());
            return ResponseEntity.ok(moodEntryGetDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody MoodEntryPostDTO moodEntryPostDTO) {
        moodEntryService.save(mapStructMapper.moodEntryPostDTOToMoodEntryEntity(moodEntryPostDTO));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
