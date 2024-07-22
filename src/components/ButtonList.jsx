import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { setCategory } from '../utils/appSlice';

const buttons = [
  "All",
  "Music",
  "Live",
  "Shorts",
  "Blogs",
  "Technology",
  "Sports",
  "Trending",
  "News",
  "Cricket",
  "Comedy",
  "Thriller",
  "Programming",
  "JavaScript",
  "Java",
];
const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };

  return (
    <div className="flex gap-3 overflow-x-scroll no-scrollbar">
      {buttons.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              videoByTag(item);
            }}
            className={`${active === item ? "bg-slate-900 text-white" : "bg-gray-200"} px-4 font-medium py-1 rounded-lg`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
