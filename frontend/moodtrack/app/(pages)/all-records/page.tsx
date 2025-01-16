"use client";

import { useState } from "react";
import { BiHappy, BiSmile, BiSad } from "react-icons/bi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";

export default function Page() {
  const [expandedRecord, setExpandedRecord] = useState<number | null>(null);

  const records = [
    {
      date: "4 Feb. 2024",
      moodIcon: <BiHappy />,
      moodColor: "bg-very-happy",
      activities: "sport, shopping, homework",
      emotions: "sadness, rejection, happiness",
      note: "Had a productive day with mixed emotions but overall happy.",
    },
    {
      date: "5 Feb. 2024",
      moodIcon: <BiSmile />,
      moodColor: "bg-happy",
      activities: "reading, walking",
      emotions: "contentment, relaxation",
      note: "A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.",
    },
    {
      date: "6 Feb. 2024",
      moodIcon: <MdOutlineSentimentNeutral />,
      moodColor: "bg-okay",
      activities: "work, gym",
      emotions: "neutrality, fatigue",
      note: "Felt okay but a bit drained after the gym session.",
    },
    {
      date: "7 Feb. 2024",
      moodIcon: <BiSad />,
      moodColor: "bg-sad",
      activities: "errands, cleaning",
      emotions: "sadness, frustration",
      note: "A tough day with some frustrating errands.",
    },
    {
      date: "8 Feb. 2024",
      moodIcon: <FaRegSadCry />,
      moodColor: "bg-very-sad",
      activities: "resting",
      emotions: "grief, loneliness",
      note: "A hard day emotionally, stayed in and rested.",
    },
    {
      date: "4 Feb. 2024",
      moodIcon: <BiHappy />,
      moodColor: "bg-very-happy",
      activities: "sport, shopping, homework",
      emotions: "sadness, rejection, happiness",
      note: "Had a productive day with mixed emotions but overall happy.",
    },
    {
      date: "5 Feb. 2024",
      moodIcon: <BiSmile />,
      moodColor: "bg-happy",
      activities: "reading, walking",
      emotions: "contentment, relaxation",
      note: "A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.A peaceful and relaxed day with some light reading.",
    },
    {
      date: "6 Feb. 2024",
      moodIcon: <MdOutlineSentimentNeutral />,
      moodColor: "bg-okay",
      activities: "work, gym",
      emotions: "neutrality, fatigue",
      note: "Felt okay but a bit drained after the gym session.",
    },
    {
      date: "7 Feb. 2024",
      moodIcon: <BiSad />,
      moodColor: "bg-sad",
      activities: "errands, cleaning",
      emotions: "sadness, frustration",
      note: "A tough day with some frustrating errands.",
    },
    {
      date: "8 Feb. 2024",
      moodIcon: <FaRegSadCry />,
      moodColor: "bg-very-sad",
      activities: "resting",
      emotions: "grief, loneliness",
      note: "A hard day emotionally, stayed in and rested.",
    },
  ];

  return (
    <div className="font-shadows basis-3/4 flex flex-col p-3">
      <div className="w-full p-5 rounded-xl">
        <h1 className="text-5xl text-center">All your mood records</h1>
      </div>
      <div className="flex flex-col gap-5 overflow-y-scroll mt-10">
        {records.map((record, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-nordic-purple-900 flex flex-col gap-3 cursor-pointer"
            onClick={() =>
              setExpandedRecord(expandedRecord === index ? null : index)
            }
          >
            <div className="flex flex-row text-xl items-center gap-5">
              <span>{record.date}</span>
              <span className={`text-2xl p-2 ${record.moodColor} rounded-full`}>
                {record.moodIcon}
              </span>
            </div>
            <div className="flex flex-row justify-between text-lg w-1/2">
              <div>Activities: {record.activities}</div>
              <div>Emotions: {record.emotions}</div>
            </div>
            {expandedRecord === index && (
              <div className="mt-3 p-3 bg-nordic-purple-800 rounded-lg text-white font-opensans">
                <span>Note:</span> {record.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
