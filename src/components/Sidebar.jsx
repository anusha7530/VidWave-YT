import React from "react";
import { FaWallet, FaMusic } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { PiFilmSlateBold } from "react-icons/pi";

const Sidebar = () => {
  const menuItems = [
    { icon: <IoMdHome size={25} className="mr-4" />, text: "Home" },
    { icon: <SiYoutubeshorts size={25} className="mr-4" />, text: "Shorts" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Subscriptions" },
    { icon: <FaMusic size={25} className="mr-4" />, text: "Music" },
    { icon: <IoMdHome size={25} className="mr-4" />, text: "Trending" },
    { icon: <SiYoutubeshorts size={25} className="mr-4" />, text: "Shorts" },
    { icon: <PiFilmSlateBold size={25} className="mr-4" />, text: "Films" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
  ];
  return (
    <div className="w-[16%] hidden md:block overflow-y-scroll overflow-x-hidden h-[calc(100vh-4.625rem )]">
      <div>
        <ul className="flex flex-col text-gray-800 gap-3">
          {menuItems.map(({ icon, text }, index) => {
            return (
              <div key={index}>
                <li className="text-lg p-2 flex cursor-pointer rounded-lg mx-4 hover:bg-gray-400 hover:text-white">
                  {icon} {text}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
