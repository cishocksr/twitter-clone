import Image from "next/image";
import React from "react";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsHorizontalIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w=[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} alt="logo" />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Nottifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="BookMarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] font-bold shadow-md hover:bg-[#1aacd8]">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto mt-auto xl:-mr-5">
        <img
          src="https://yt3.ggpht.com/yti/APfAmoFhWg8PMkTQYaFBgAak1eqUVnlPiKUv3CV50Q=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="C"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />

        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">User1</h4>
          <p className="text-[#6e767d]">@user1</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
