import axios from "axios";
import { MoodEntry } from "../types/mood";

export const postMoodEntry = async (data: {
  overallMood: number;
  levelOfSleep: number;
  activities: string[];
  emotions: string[];
  personalNote: string;
}) => {
  try {
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

export const getMoodEntries = async (): Promise<MoodEntry[]> => {
  try {
    const response = await axios.get("http://localhost:8080/mood-entries");
    if (response.status === 200) {
      console.log("Mood entries retrieved successfully!");
      console.log(response.data);
      return response.data; // Return the data from the response
    } else {
      throw new Error("Failed to retrieve mood entries");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};