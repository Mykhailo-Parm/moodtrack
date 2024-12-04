import {
  RiHomeLine,
  RiFileList3Line,
  RiUser3Line,
  RiSettings3Line,
} from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import SidebarButton from "./SidebarButton";
export default function SidebarLinks() {
  return (
    <>
      <SidebarButton to="/">
        <RiHomeLine />
        Home
      </SidebarButton>
      <SidebarButton to="/log-mood">
        <HiOutlinePencilSquare />
        New record
      </SidebarButton>
      <SidebarButton to="/all-records">
        <RiFileList3Line />
        All records
      </SidebarButton>
      <SidebarButton to="/profile">
        <RiUser3Line />
        Profile
      </SidebarButton>
      <SidebarButton to="/settings">
        <RiSettings3Line />
        Settings
      </SidebarButton>
    </>
  );
}
