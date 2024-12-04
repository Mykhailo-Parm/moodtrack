export default function Home() {
  const mockData = {
    firstname: "John",
  };
  return (
    <div className="font-shadows basis-3/4 flex flex-col p-3">
      <div className="w-full p-5 rounded-xl">
        <h1 className="text-5xl text-center">Welcome, {mockData.firstname}!</h1>
      </div>
      <div className="lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-5 mt-10 justify-items-center hidden">
        <div className="h-40 p-3 rounded-xl dark:bg-nordic-purple-900 bg-green-100 flex flex-col justify-center w-full items-center">
          <h3 className="">Number Of Consecutive Days:</h3>
          <span>5</span>
        </div>
        <div className="grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 p-3 dark:bg-nordic-purple-900 bg-green-100 rounded-xl flex flex-col justify-center w-full items-center">
          Graph - Work In Progress
        </div>
        <div className="h-40 p-3 dark:bg-nordic-purple-900 bg-green-100 rounded-xl flex flex-col justify-center w-full items-center">
          Most Popular Mood For Past 5 Days
        </div>
        <div className="h-40 p-3 dark:bg-nordic-purple-900 bg-green-100 rounded-xl flex flex-col justify-center w-full items-center">
          Work In Progress
        </div>
        <div className="grid-rows-subgrid col-span-2 p-3 dark:bg-nordic-purple-900 bg-green-100 rounded-xl flex flex-col justify-center w-full items-center">
          Work In Progress
        </div>
      </div>

      <div className="lg:hidden block">Small</div>
    </div>
  );
}
