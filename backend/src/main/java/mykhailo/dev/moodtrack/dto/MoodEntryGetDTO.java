package mykhailo.dev.moodtrack.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MoodEntryGetDTO {
    @JsonProperty("id")
    private Long id;

    @JsonProperty("overallMood")
    private int overallMood;

    @JsonProperty("levelOfSleep")
    private int levelOfSleep;

    @JsonProperty("activities")
    private List<String> activities;

    @JsonProperty("emotions")
    private List<String> emotions;

    @JsonProperty("personalNote")
    private String personalNote;

    @JsonProperty("createdAt")
    private LocalDateTime createdAt;
}
