import Link from "next/link";
import React from "react";
import {
  RiHomeLine,
  RiFileList3Line,
  RiUser3Line,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { TbMoodHeart } from "react-icons/tb";


export default function Sidebar() {
  return (
    <div className="font-shadows basis-1/4 p-3  flex flex-col gap-5">
      <div className=" text-4xl flex items-center bg-azure-800 rounded-md">
        <h1>
          <Link className="flex flex-row gap-2" href="/">
            <TbMoodHeart /> MoodTrack
          </Link>
        </h1>
      </div>

      <hr className="border-gray-400" />

      <div className=" flex flex-col text-xl gap-5 justify-center items-center bg-azure-800 rounded-md text-gray-400">
        <Link
          href="/"
          className="w-full cursor-pointer hover:text-white hover:bg-nordic-purple-700 px-5 py-2 rounded-xl flex flex-row items-center gap-2"
        >
          <RiHomeLine />
          Home
        </Link>
        <Link
          href="/log-mood"
          className="w-full cursor-pointer hover:text-white hover:bg-nordic-purple-700 px-5 py-2 rounded-xl flex flex-row items-center gap-2"
        >
          <HiOutlinePencilSquare />
          New record
        </Link>
        <Link
          href="/all-records"
          className="w-full cursor-pointer hover:text-white hover:bg-nordic-purple-700 px-5 py-2 rounded-xl flex flex-row items-center gap-2"
        >
          <RiFileList3Line />
          All records
        </Link>
        <Link
          href="/profile"
          className="w-full cursor-pointer hover:text-white hover:bg-nordic-purple-700 px-5 py-2 rounded-xl flex flex-row items-center gap-2"
        >
          <RiUser3Line />
          Profile
        </Link>
        <Link
          href="/settings"
          className="w-full cursor-pointer hover:text-white hover:bg-nordic-purple-700 px-5 py-2 rounded-xl flex flex-row items-center gap-2"
        >
          <RiSettings3Line />
          Settings
        </Link>
      </div>

      <hr className="border-gray-400" />

      <div className=" flex flex-col gap-3 justify-center items-center text-lg text-gray-400">
        <span>Mykhailo Parm</span>
        <span>mykhailo.parm.dev@gmail.com</span>
      </div>

      <hr className="border-gray-400" />

      <div className="text-gray-400 text-2xl flex items-center p-3 bg-azure-800 rounded-md">
        <div className="w-full cursor-pointer bg-calm-red-800 px-5 py-2 rounded-xl hover:bg-calm-red-700 hover:text-white flex flex-row items-center gap-2">
          <RiLogoutBoxLine />
          Log out
        </div>
      </div>
    </div>
  );
}