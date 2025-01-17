export interface MoodEntry {
  id?: number;
  overallMood: Mood;
  levelOfSleep: number;
  activities: string[];
  emotions: string[];
  personalNote: string;
  createdAt?: string;
}

export type Mood = 0 | 1 | 2 | 3 | 4;