import clsx from "clsx";

export default function EmotionSelector({
  selectedEmotions,
  onEmotionClick,
  onClearEmotions,
}: {
  selectedEmotions: string[];
  onEmotionClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClearEmotions: () => void;
}) {
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

  return (
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
                  "!bg-nordic-purple-700 border-2 !border-nordic-purple-600 ":
                    selectedEmotions.includes(emotion),
                }
              )}
              onClick={onEmotionClick}
            >
              {emotion}
            </div>
          ))}
        </div>
        <div className="w-4/5 flex justify-end">
          <div
            className={clsx(
              "px-5 py-2 rounded-xl transition-all duration-300 ease-in-out",
              selectedEmotions.length === 1
                ? "invisible"
                : "bg-calm-red-700 hover:bg-calm-red-600 cursor-pointer"
            )}
            onClick={onClearEmotions}
          >
            Clear All
          </div>
        </div>
      </div>
    </div>
  );
}
