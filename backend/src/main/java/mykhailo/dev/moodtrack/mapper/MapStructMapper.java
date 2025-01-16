package mykhailo.dev.moodtrack.mapper;

import mykhailo.dev.moodtrack.dto.MoodEntryGetDTO;
import mykhailo.dev.moodtrack.dto.MoodEntryPostDTO;
import mykhailo.dev.moodtrack.dto.UserGetDTO;
import mykhailo.dev.moodtrack.dto.UserPostDTO;
import mykhailo.dev.moodtrack.entity.MoodEntryEntity;
import mykhailo.dev.moodtrack.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring"
)
public interface MapStructMapper {
    UserGetDTO userEntityToUserGetDTO(
            UserEntity userEntity
    );

    UserEntity userPostDTOToUserEntity(
            UserPostDTO userPostDTO
    );

    MoodEntryGetDTO moodEntryEntityToMoodEntryGetDTO(
            MoodEntryEntity moodEntryEntity
    );

    MoodEntryEntity moodEntryPostDTOToMoodEntryEntity(
            MoodEntryPostDTO moodEntryPostDTO
    );
}
