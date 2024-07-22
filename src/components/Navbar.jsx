import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaWallet,FaMusic } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { PiFilmSlateBold } from "react-icons/pi";
import { FaInfoCircle, FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";
import Logo from "../Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchSuggestion } from "../utils/appSlice";
import axios from "axios";
import { SEARCH_SUGGESTIONS_API } from "../utils/constant/config";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = () => {
    setSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

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
            value={input}
            onFocus={openSuggestion}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 border outline-none border-gray-400 w-full rounded-s-3xl"
            placeholder="Search"
          />
          <button onClick={searchVideo} className="p-3 px-5">
            <FaSearch />
          </button>
          {suggestion && searchSuggestion.length !== 0 && (
        <div className="absolute top-3 z-50 w-[30%] py-5 bg-white shadow-lg mt-14 rounded-lg border border-gray-200">
          <ul>
            {searchSuggestion.map((text, idx) => {
              return (
                <div className="flex items-center px-4 hover:bg-gray-100">
                  <FaSearch size="14px" className="hidden md:block"/>
                  <li onClick={() => setInput(`${text}`)} className="px-2 py-1 cursor-pointer text-md">
                    {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}

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
            ? "fixed top-0 left-0 w-[250px] h-full bg-white z-10 duration-100"
            : "fixed top-0 left-[-100%] w-[300px] h-full bg-white z-10 duration-100"
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
