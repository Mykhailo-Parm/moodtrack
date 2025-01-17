"use client";

import { useState } from "react";

import {
  SubmitButton,
  MoodSlider,
  ActivitySelector,
  SleepSlider,
  EmotionSelector,
} from "@/app/components/forms/log-mood";
import { MoodEntry, Mood } from "@/app/types/mood";
import { postMoodEntry } from "@/app/lib/api";

export default function Page() {
  const [overallMood, setOverallMood] = useState<Mood>(2);
  const [levelOfSleep, setLevelOfSleep] = useState<number>(0);
  const [activities, setActivities] = useState<string[]>([]); // Updated type
  const [emotions, setEmotions] = useState<string[]>([]); // Updated type
  const [personalNote, setPersonalNote] = useState<string>("");

  const handleMoodSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOverallMood(Number(event.target.value) as Mood);
  };

  const handleSleepSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setLevelOfSleep(value);
  };

  const handleActivityClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const activityName = (event.target as HTMLDivElement).textContent || "";

    if (activities.includes(activityName)) {
      setActivities(activities.filter((a) => a !== activityName));
    } else {
      setActivities([...activities, activityName]);
    }
  };

  const handleClearAllActivities = () => {
    setActivities([]);
  };

  const handleEmotionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const emotionName = (event.target as HTMLDivElement).textContent || "";

    if (emotions.includes(emotionName)) {
      setEmotions(emotions.filter((e) => e !== emotionName));
    } else {
      setEmotions([...emotions, emotionName]);
    }
  };

  const handleClearAllEmotions = () => {
    setEmotions([]);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPersonalNote(event.target.value);
  };

  const handleSubmit = async () => {
    const data: MoodEntry = {
      overallMood: overallMood,
      levelOfSleep: levelOfSleep,
      activities: activities, // Works directly with strings
      emotions: emotions, // Works directly with strings
      personalNote,
    };
    try {
      console.log(data)
      await postMoodEntry(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-shadows basis-3/4 flex flex-col p-3 gap-5">
      <div className="w-full p-5 rounded-xl mb-5">
        <h1 className="text-5xl text-center">Log your mood</h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 grid-rows-2 gap-5 text-2xl">
          {/* Mood Slider */}
          <MoodSlider
            mood={overallMood}
            onMoodChange={handleMoodSliderChange}
          />
          {/* Activities Section */}
          <ActivitySelector
            selectedActivities={activities} // Directly passes the array of strings
            onActivityClick={handleActivityClick}
            onClearActivities={handleClearAllActivities}
          />
          {/* Sleep Hours Slider */}
          <SleepSlider
            sleepHours={levelOfSleep}
            onSleepChange={handleSleepSliderChange}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-5 text-2xl">
          {/* Emotions Section */}
          <EmotionSelector
            selectedEmotions={emotions} // Directly passes the array of strings
            onEmotionClick={handleEmotionClick}
            onClearEmotions={handleClearAllEmotions}
          />

          <div className="p-5 rounded-xl bg-nordic-purple-900 font-sans">
            <textarea
              className="w-full h-full p-4 text-xl bg-nordic-purple-950 text-secondary border-2 border-nordic-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-purple-600 resize-none"
              placeholder="Write your thoughts here..."
              value={personalNote}
              onChange={handleNoteChange}
            ></textarea>
          </div>
        </div>
      </div>
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
}
