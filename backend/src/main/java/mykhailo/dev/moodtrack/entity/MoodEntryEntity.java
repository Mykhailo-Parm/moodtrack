package mykhailo.dev.moodtrack.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="mood_entry")
public class MoodEntryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "overllMood", nullable = false)
    private int overallMood;

    @Column(name = "levelOfSleep", nullable = false)
    private int levelOfSleep;

    @ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
    @Column(name = "activities")
    private List<String> activities;

    @ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
    @Column(name = "emotions")
    private List<String> emotions;

    @Column(name = "personal_note")
    private String personalNote;

    @Column(name = "created_at", nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
}
