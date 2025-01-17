import { Activity } from "./activity";
import { Emotion } from "./emotion";

export interface MoodEntry {
  id?: number,
  overallMood: Mood,
  levelOfSleep: number,
  activities: Activity[],
  emotions: Emotion[],
  personalNote: string,
}

export type Mood = 0 | 1 | 2 | 3 | 4;