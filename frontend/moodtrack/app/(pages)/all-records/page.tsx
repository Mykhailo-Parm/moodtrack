"use client";

import { useEffect, useState } from "react";
import { BiHappy, BiSmile, BiSad } from "react-icons/bi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";
import { getMoodEntries } from "@/app/lib/api";
import { Mood, MoodEntry } from "@/app/types/mood";
import { formatDate } from "@/app/lib/utils";

export default function Page() {
  const [expandedRecord, setExpandedRecord] = useState<number | null>(null);
  const [records, setRecords] = useState<MoodEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch mood entries on component mount
  useEffect(() => {
    const fetchMoodEntries = async () => {
      try {
        const data: MoodEntry[] = await getMoodEntries();
        setRecords(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load mood entries.");
        setLoading(false);
        console.log(err);
      }
    };
    fetchMoodEntries();
  }, []);

  if (loading) {
    return <div>Loading mood entries...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const getMoodColor = (mood: Mood): string => {
    switch (mood) {
      case 0:
        return "gray"; // Example color for "very sad"
      case 1:
        return "blue"; // Example color for "sad"
      case 2:
        return "yellow"; // Example color for "neutral"
      case 3:
        return "green"; // Example color for "happy"
      case 4:
        return "lightgreen"; // Example color for "very happy"
      default:
        return "gray"; // Default fallback color
    }
  };

  const getMoodIcon = (mood: Mood) => {
    switch (mood) {
      case 0:
        return <FaRegSadCry />; // Very sad
      case 1:
        return <BiSad />; // Sad
      case 2:
        return <MdOutlineSentimentNeutral />; // Neutral
      case 3:
        return <BiSmile />; // Happy
      case 4:
        return <BiHappy />; // Very happy
      default:
        return <MdOutlineSentimentNeutral />; // Default fallback icon
    }
  };

  return (
    <div className="font-shadows basis-3/4 flex flex-col p-3">
      <div className="w-full p-5 rounded-xl">
        <h1 className="text-5xl text-center">All your mood records</h1>
      </div>
      <div className="flex flex-col gap-5 overflow-y-scroll mt-10">
        {records.map((record: MoodEntry, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-nordic-purple-900 flex flex-col gap-3 cursor-pointer"
            onClick={() =>
              setExpandedRecord(expandedRecord === index ? null : index)
            }
          >
            <div className="flex flex-row text-xl items-center gap-5">
              <span>{formatDate(record.createdAt)}</span>
              <span
                className="text-2xl p-2 rounded-full"
                style={{ backgroundColor: getMoodColor(record.overallMood) }}
              >
                {getMoodIcon(record.overallMood)}
              </span>
            </div>
            <div className="flex flex-row justify-between text-lg w-1/2">
              <div>
                Activities:{" "}
                {record.activities && record.activities.length > 0 ? (
                  record.activities.map((activity, i) => (
                    <span key={i}>
                      {activity}
                      {i < record.activities.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No activities recorded</span>
                )}
              </div>
              <div>
                Emotions:{" "}
                {record.emotions && record.emotions.length > 0 ? (
                  record.emotions.map((emotion, i) => (
                    <span key={i}>
                      {emotion}
                      {i < record.emotions.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No emotions recorded</span>
                )}
              </div>
            </div>
            {expandedRecord === index && (
              <div className="mt-3 p-3 bg-nordic-purple-800 rounded-lg text-white font-opensans">
                <span>Note:</span> {record.personalNote}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
