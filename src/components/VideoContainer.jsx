import React, { useEffect, useState } from "react";
import axios from "axios";
import { VIDEO_URL } from "../utils/constant/config";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${VIDEO_URL}`);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
      {video.map((item) => {
        return <VideoCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default VideoContainer;
