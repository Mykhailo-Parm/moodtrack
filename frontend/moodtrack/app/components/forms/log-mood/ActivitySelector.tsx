import clsx from "clsx";

export default function ActivitySelector({
  selectedActivities,
  onActivityClick,
  onClearActivities,
}: {
  selectedActivities: string[];
  onActivityClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClearActivities: () => void;
}) {
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
                  "!bg-nordic-purple-700 border-2 !border-nordic-purple-600 ":
                    selectedActivities.includes(activity),
                }
              )}
              onClick={onActivityClick}
            >
              {activity}
            </div>
          ))}
        </div>
        <div className="w-4/5 flex justify-end">
          <div
            className={clsx(
              "px-5 py-2 rounded-xl transition-all duration-300 ease-in-out",
              selectedActivities.length === 1
                ? "invisible"
                : "bg-calm-red-700 hover:bg-calm-red-600 cursor-pointer visible"
            )}
            onClick={onClearActivities}
          >
            Clear All
          </div>
        </div>
      </div>
    </div>
  );
}
