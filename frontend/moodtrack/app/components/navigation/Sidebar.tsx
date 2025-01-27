import Link from "next/link";

import { RiLogoutBoxLine } from "react-icons/ri";
import { TbMoodHeart } from "react-icons/tb";
import { SidebarLinks } from "@/app/components/navigation";

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

      <hr className="border-secondary" />

      <div className=" flex flex-col text-xl gap-5 justify-center items-center bg-azure-800 rounded-md text-secondary">
        <SidebarLinks />
      </div>

      <hr className="border-secondary" />

      <div className=" flex flex-col gap-3 justify-center items-center text-lg text-secondary">
        <span>Mykhailo Parm</span>
        <span>mykhailo.parm.dev@gmail.com</span>
      </div>

      <hr className="border-secondary" />

      <div className="text-secondary text-2xl flex items-center p-3 bg-azure-800 rounded-md">
        <div className="w-full cursor-pointer bg-calm-red-800 px-5 py-2 rounded-xl hover:bg-calm-red-700 hover:text-white flex flex-row items-center gap-2">
          <RiLogoutBoxLine />
          Log out
        </div>
      </div>
    </div>
  );
}
