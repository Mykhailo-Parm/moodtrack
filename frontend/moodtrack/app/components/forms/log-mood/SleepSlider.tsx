export default function SleepSlider({
  sleepHours,
  onSleepChange,
}: {
  sleepHours: number;
  onSleepChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const getSleepText = () => {
    if (sleepHours === 0) return "Less than 1 hour";
    if (sleepHours > 12) return "More than 12 hours";
    return `${sleepHours} ${sleepHours === 1 ? "hour" : "hours"}`;
  };

  return (
    <div className="p-5 rounded-xl bg-nordic-purple-900">
      <div className="h-full w-full flex flex-col items-center justify-center gap-5">
        <h1>How long have you slept today?</h1>
        <span className="text-secondary">{getSleepText()}</span>
        <input
          type="range"
          min="0"
          max="13"
          value={sleepHours}
          onChange={onSleepChange}
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
  );
}
