package mykhailo.dev.moodtrack.service;

import mykhailo.dev.moodtrack.entity.MoodEntryEntity;

import java.util.List;
import java.util.Optional;

public interface MoodEntryService {
    List<MoodEntryEntity> findAll();
    void save(MoodEntryEntity moodEntryEntity);

    Optional<MoodEntryEntity> findOneById(Long id);
}
