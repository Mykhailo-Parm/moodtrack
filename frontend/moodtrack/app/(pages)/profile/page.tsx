"use client";

export default function page() {
  const userData = {
    avatarUrl: "https://via.placeholder.com/150",
    username: "JohnDoe123",
    fullName: "John Doe",
  };

  return (
    <div className="font-shadows basis-3/4 flex flex-col p-5 gap-5">
      <div className="w-full p-5 rounded-xl bg-nordic-purple-900 flex flex-col items-center text-center">
        
        <img
          src={userData.avatarUrl}
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-mint-green-600 mb-3"
        />

        <h1 className="text-3xl font-bold">{userData.fullName}</h1>
        <p className="text-lg text-gray-300">@{userData.username}</p>
      </div>
    </div>
  );
}
