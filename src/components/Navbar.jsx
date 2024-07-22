import React , {useState} from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaInfoCircle, FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";
import Logo from "../Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <IoMdHome size={25} className="mr-4" />, text: "Home" },
    { icon: <SiYoutubeshorts size={25} className="mr-4" />, text: "Shorts" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Subscriptions" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },

  ];
  return (
    <div className="fixed top-0 flex justify-between px-4 w-[100%] bg-white">
      <div className="flex items-center text-2xl gap-2 ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          <AiOutlineMenu size={30} />
        </div>
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
      <div className="text-2xl gap-4 text-gray-700 items-center  hidden md:flex">
        <IoIosNotifications className="cursor-pointer" />
        <FaInfoCircle className="cursor-pointer" />
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ161puiFPsmuVYLfbaRPlAVo1qZJ80_BFgQQ&s"
          size={40}
          round={true}
        />
      </div>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-100"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-100"
        }
      >
        <div className="flex gap-2 items-center p-2">
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          size={30}
          className="cursor-pointer"
        />
        <img src={Logo} alt="logo" className="w-40" />
        </div>
        <div>
          <ul className="flex flex-col text-gray-800l">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className="py-4">
                  <li className="text-lg p-2 flex cursor-pointer rounded-lg mx-4 hover:bg-gray-500 hover:text-white">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
