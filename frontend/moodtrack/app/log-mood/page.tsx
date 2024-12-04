"use client";

import { useState } from "react";
import { BiHappy, BiSmile, BiSad } from "react-icons/bi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";

export default function Page() {
  const [mood, setMood] = useState(2);
  const [sleepHours, setSleepHours] = useState(0);
  const moods = ["Very Happy", "Happy", "Okay", "Sad", "Very Sad"];

  const handleMoodSliderChange = (event: any) => {
    setMood(Number(event.target.value));
  };

  const handleSleepSliderChange = (event: any) => {
    const value = Number(event.target.value);
    setSleepHours(value);
  };

  const getSleepText = () => {
    if (sleepHours === 0) return "Less than 1 hour";
    if (sleepHours > 12) return "More than 12 hours";
    return `${sleepHours} ${sleepHours === 1 ? "hour" : "hours"}`;
  };

  return (
    <div className="font-shadows basis-3/4 flex flex-col p-3">
      <div className="h-full w-full p-5 rounded-xl">
        <h1 className="text-5xl text-center">Log your mood</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-5 text-2xl">
        {/* Mood Slider */}
        <div className="p-5 rounded-xl bg-nordic-purple-900">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h1>How was you feeling today?</h1>
            <span className="text-gray-400">{moods[mood]}</span>
            <input
              type="range"
              min="0"
              max="4"
              value={mood}
              onChange={handleMoodSliderChange}
              className="w-64
                appearance-none 
                bg-transparent
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
                className={`p-2 ${
                  mood === 0 ? "text-very-happy" : "text-gray-400"
                }`}
              >
                <BiHappy />
              </div>
              <div
                className={`p-2 ${mood === 1 ? "text-happy" : "text-gray-400"}`}
              >
                <BiSmile />
              </div>
              <div
                className={`p-2 ${mood === 2 ? "text-okay" : "text-gray-400"}`}
              >
                <MdOutlineSentimentNeutral />
              </div>
              <div
                className={`p-2 ${mood === 3 ? "text-sad" : "text-gray-400"}`}
              >
                <BiSad />
              </div>
              <div
                className={`p-2 ${
                  mood === 4 ? "text-very-sad" : "text-gray-400"
                }`}
              >
                <FaRegSadCry />
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 p-5 rounded-xl bg-nordic-purple-900 flex flex-col">
          <h1>What activities have you done today?</h1>
        </div>

        {/* Sleep Hours Slider */}
        <div className="p-5 rounded-xl bg-nordic-purple-900">
          <div className="h-full w-full flex flex-col items-center justify-center gap-5">
            <h1>How long have you slept today?</h1>
            <span className="text-gray-400">{getSleepText()}</span>
            <input
              type="range"
              min="0"
              max="13"
              value={sleepHours}
              onChange={handleSleepSliderChange}
              className="w-full
      appearance-none 
      bg-transparent
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
                    sleepHours === i ? "text-white" : "text-gray-400"
                  }`}
                >
                  {i === 0 ? "<1" : i === 13 ? ">12" : i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
