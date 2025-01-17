import React, { useEffect, useState } from "react";
import axios from "axios";
import { VIDEO_URL } from "../utils/constant/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${VIDEO_URL}`);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchVideo();
    } else {
      fetchVideoByCategory(category);
    }
  }, [category]);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
      {video.map((item) => {
        return (
          <Link
            to={`/watch?v=${
              typeof item.id === "object" ? item.id.videoId : item.id
            }`}
            key={`${typeof item.it === "object" ? item.id.videoId : item.id}`}
          >
            <VideoCard item={item} />;
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
