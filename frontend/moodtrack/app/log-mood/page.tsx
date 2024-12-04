"use client";

import { useState } from "react";
import { BiHappy, BiSmile, BiSad } from "react-icons/bi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";
import clsx from "clsx";

export default function Page() {
  const [mood, setMood] = useState(2);
  const [sleepHours, setSleepHours] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState([""]);
  const [selectedEmotions, setSelectedEmotions] = useState([""]);
  const moods = ["Very Happy", "Happy", "Okay", "Sad", "Very Sad"];

  const handleMoodSliderChange = (event: any) => {
    setMood(Number(event.target.value));
  };

  const handleSleepSliderChange = (event: any) => {
    const value = Number(event.target.value);
    setSleepHours(value);
  };

  const handleActivityClick = (event: any) => {
    const activity = event.target.textContent;
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const handleClearAllActivities = (event: any) => {
    setSelectedActivities([""]);
  };
  
  const handleEmotionClick = (event: any) => {
    const emotion = event.target.textContent;
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter((a) => a !== emotion));
    } else {
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  };

  const handleClearAllEmotions = (event: any) => {
    setSelectedEmotions([""]);
  };

  const getSleepText = () => {
    if (sleepHours === 0) return "Less than 1 hour";
    if (sleepHours > 12) return "More than 12 hours";
    return `${sleepHours} ${sleepHours === 1 ? "hour" : "hours"}`;
  };

  const emotions = [
    "Happy",
    "Sad",
    "Angry",
    "Excited",
    "Fearful",
    "Surprised",
    "Calm",
    "Anxious",
    "Confident",
    "Embarrassed",
    "Proud",
    "Grateful",
    "Lonely",
    "Jealous",
    "Frustrated",
    "Hopeful",
    "Content",
    "Nervous",
    "Bored",
    "Love",
  ];

  const dailyActivities = [
    "Tidying Up the Bed",
    "Gym",
    "Studying",
    "Running",
    "Walking",
    "Cooking",
    "Eating Breakfast",
    "Eating Lunch",
    "Eating Dinner",
    "Cleaning the House",
    "Grocery Shopping",
    "Working",
    "Reading",
    "Socializing with Friends",
    "Watching TV",
    "Listening to Music",
    "Meditating",
    "Doing Laundry",
    "Taking a Nap",
    "Relaxing",
  ];

  return (
    <div className="font-shadows basis-3/4 flex flex-col p-3 gap-5">
      <div className="w-full p-5 rounded-xl mb-5">
        <h1 className="text-5xl text-center">Log your mood</h1>
      </div>
      <div className="overflow-y-scroll flex flex-col gap-5">
        <div className="grid grid-cols-3 grid-rows-2 gap-5 text-2xl">
          {/* Mood Slider */}
          <div className="p-5 rounded-xl bg-nordic-purple-900">
            <div className="w-full flex flex-col items-center justify-center gap-5">
              <h1>How was you feeling today?</h1>
              <span className="text-secondary">{moods[mood]}</span>
              <input
                type="range"
                min="0"
                max="4"
                value={mood}
                onChange={handleMoodSliderChange}
                className="w-64
                appearance-none 
                bg-transparent
                cursor-pointer
                [&::-webkit-slider-runnable-track]:rounded-full 
                [&::-webkit-slider-runnable-track]:bg-nordic-purple-700 
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-nordic-purple-100
                [&::-webkit-slider-thumb]"
              />
              <div className="grid grid-cols-5 border-2 border-nordic-purple-600 text-4xl rounded-xl bg-secondary-darker">
                <div
                  className={`p-2 transition-all duration-300 ease-in-out ${
                    mood === 0 ? "text-very-happy" : "text-secondary"
                  }`}
                >
                  <BiHappy />
                </div>
                <div
                  className={`p-2 transition-all duration-300 ease-in-out ${
                    mood === 1 ? "text-happy" : "text-secondary"
                  }`}
                >
                  <BiSmile />
                </div>
                <div
                  className={`p-2 transition-all duration-300 ease-in-out ${
                    mood === 2 ? "text-okay" : "text-secondary"
                  }`}
                >
                  <MdOutlineSentimentNeutral />
                </div>
                <div
                  className={`p-2 transition-all duration-300 ease-in-out ${
                    mood === 3 ? "text-sad" : "text-secondary"
                  }`}
                >
                  <BiSad />
                </div>
                <div
                  className={`p-2 transition-all duration-300 ease-in-out ${
                    mood === 4 ? "text-very-sad" : "text-secondary"
                  }`}
                >
                  <FaRegSadCry />
                </div>
              </div>
            </div>
          </div>

          {/* Activities Section */}
          <div className="grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 p-5 rounded-xl bg-nordic-purple-900">
            <div className="h-full w-full flex flex-col items-center justify-center gap-5">
              <h1>What activities have you done today?</h1>
              <div className="flex flex-wrap gap-4 text-xl justify-center">
                {dailyActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "p-4 rounded-md bg-nordic-purple-950 border-2 border-nordic-purple-950 hover:bg-nordic-purple-800 cursor-pointer transition-all duration-300 ease-in-out",
                      {
                        "bg-nordic-purple-700 border-2 border-nordic-purple-600 ":
                          selectedActivities.includes(activity),
                      }
                    )}
                    onClick={handleActivityClick}
                  >
                    {activity}
                  </div>
                ))}
              </div>
              <div className="w-4/5 flex justify-end">
                <div
                  className={clsx(
                    "px-5 py-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out",
                    selectedActivities.length === 1
                      ? "bg-secondary-darker text-secondary"
                      : "bg-calm-red-700 hover:bg-calm-red-600"
                  )}
                  onClick={handleClearAllActivities}
                >
                  Clear All
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Hours Slider */}
          <div className="p-5 rounded-xl bg-nordic-purple-900">
            <div className="h-full w-full flex flex-col items-center justify-center gap-5">
              <h1>How long have you slept today?</h1>
              <span className="text-secondary">{getSleepText()}</span>
              <input
                type="range"
                min="0"
                max="13"
                value={sleepHours}
                onChange={handleSleepSliderChange}
                className="w-full
      appearance-none 
      bg-transparent
                cursor-pointer
      [&::-webkit-slider-runnable-track]:rounded-full 
      [&::-webkit-slider-runnable-track]:bg-nordic-purple-700 
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:h-4
      [&::-webkit-slider-thumb]:w-4
      [&::-webkit-slider-thumb]:rounded-full 
      [&::-webkit-slider-thumb]:bg-nordic-purple-100
      [&::-webkit-slider-thumb]"
              />
              <div className="flex flex-row justify-between text-sm rounded-xl w-full">
                {Array.from({ length: 14 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-full text-center ${
                      sleepHours === i ? "text-white" : "text-secondary"
                    }`}
                  >
                    {i === 0 ? "<1" : i === 13 ? ">12" : i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-5 text-2xl">
          {/* Emotions Section */}
          <div className="p-5 rounded-xl bg-nordic-purple-900">
            <div className="h-full w-full flex flex-col items-center justify-center gap-5">
              <h1>What emotions have you felt today?</h1>
              <div className="flex flex-wrap gap-4 text-xl justify-center">
                {emotions.map((emotion, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "p-4 rounded-md bg-nordic-purple-950 border-2 border-nordic-purple-950 hover:bg-nordic-purple-800 cursor-pointer transition-all duration-300 ease-in-out",
                      {
                        "bg-nordic-purple-700 border-2 border-nordic-purple-600 ":
                          selectedEmotions.includes(emotion),
                      }
                    )}
                    onClick={handleEmotionClick}
                  >
                    {emotion}
                  </div>
                ))}
              </div>
              <div className="w-4/5 flex justify-end">
                <div
                  className={clsx(
                    "px-5 py-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out",
                    selectedEmotions.length === 1
                      ? "bg-secondary-darker text-secondary"
                      : "bg-calm-red-700 hover:bg-calm-red-600"
                  )}
                  onClick={handleClearAllEmotions}
                >
                  Clear All
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-nordic-purple-900 font-sans">
            <textarea
              className="w-full h-full p-4 text-xl bg-nordic-purple-950 text-secondary border-2 border-nordic-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-purple-600 resize-none"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="px-5 py-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out bg-mint-green-700 hover:bg-mint-green-600">
          Submit
        </div>
      </div>
    </div>
  );
}
