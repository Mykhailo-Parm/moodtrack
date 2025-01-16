package mykhailo.dev.moodtrack.repository;

import mykhailo.dev.moodtrack.entity.MoodEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoodEntryRepository extends JpaRepository<MoodEntryEntity, Long> {
}
