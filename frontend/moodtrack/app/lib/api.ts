import axios from "axios";
import { Activity } from "../types/activity";
import { Emotion } from "../types/emotion";

export const postMoodEntry = async (data: {
  overallMood: number;
  levelOfSleep: number;
  activities: Activity[];
  emotions: Emotion[];
  personalNote: string;
}) => {
  try {
    console.log(data);
    const response = await axios.post(
      "http://localhost:8080/mood-entries",
      data
    );
    if (response.status === 201) {
      console.log("Mood entry saved successfully!");
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
