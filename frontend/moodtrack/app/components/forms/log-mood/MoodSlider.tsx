import { BiHappy, BiSmile, BiSad } from "react-icons/bi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";

export default function MoodSlider({
  mood,
  onMoodChange,
}: {
  mood: number;
  onMoodChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const moods = ["Very Happy", "Happy", "Okay", "Sad", "Very Sad"];
  return (
    <div className="p-5 rounded-xl bg-nordic-purple-900">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h1>How was you feeling today?</h1>
        <span className="text-secondary">{moods[mood]}</span>
        <input
          type="range"
          min="0"
          max="4"
          value={mood}
          onChange={onMoodChange}
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
  );
}
