package mykhailo.dev.moodtrack.service;

import mykhailo.dev.moodtrack.entity.MoodEntryEntity;

import java.util.List;

public interface MoodEntryService {
    List<MoodEntryEntity> findAll();
    void save(MoodEntryEntity moodEntryEntity);
}
