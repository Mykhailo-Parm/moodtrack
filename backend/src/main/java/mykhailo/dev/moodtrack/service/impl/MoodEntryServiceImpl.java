package mykhailo.dev.moodtrack.service.impl;

import mykhailo.dev.moodtrack.entity.MoodEntryEntity;
import mykhailo.dev.moodtrack.repository.MoodEntryRepository;
import mykhailo.dev.moodtrack.service.MoodEntryService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MoodEntryServiceImpl implements MoodEntryService {
    private final MoodEntryRepository moodEntryRepository;

    public MoodEntryServiceImpl(MoodEntryRepository moodEntryRepository) {
        this.moodEntryRepository = moodEntryRepository;
    }

    @Override
    public List<MoodEntryEntity> findAll() {
        return new ArrayList<>(moodEntryRepository.findAll());
    }

    @Override
    public void save(MoodEntryEntity moodEntryEntity) {
        moodEntryRepository.save(moodEntryEntity);
    }
}
