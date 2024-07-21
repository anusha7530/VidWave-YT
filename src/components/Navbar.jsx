import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { FaInfoCircle, FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";
import Logo from "../Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4">
      <div className="flex items-center text-2xl gap-2 ">
        <GiHamburgerMenu />
        <img src={Logo} alt="logo" className="w-44" />
      </div>
      <div className="flex items-center w-[40%] ">
        <div className="bg-gray-400 flex w-full rounded-3xl">
          <input
            type="text"
            className="px-4 border outline-none border-gray-400 w-full rounded-s-3xl"
            placeholder="Search"
          />
          <label className="p-3 px-5">
            <FaSearch />
          </label>
        </div>
      </div>
      <div className="flex text-2xl gap-4 text-gray-700 items-center ">
        <IoIosNotifications className="cursor-pointer" />
        <FaInfoCircle className="cursor-pointer" />
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ161puiFPsmuVYLfbaRPlAVo1qZJ80_BFgQQ&s"
          size={40}
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
