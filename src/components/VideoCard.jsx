import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import axios from "axios";

const VideoCard = ({ item }) => {
  const [icon, setIcon] = useState("");

  const getChannel = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
          item.snippet.channelId
        }&key=${import.meta.env.VITE_API_KEY}`
      );
      setIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChannel();
  }, []);

  return (
    <div className="w-full cursor-pointer">
      <img
        src={item.snippet.thumbnails.medium.url}
        alt="video"
        className="w-[90%] rounded-xl"
      />
      <div>
        <div className="flex gap-2 mt-2">
          <Avatar src={icon} size={40} round={true} />
          <div className="ml-4">
            <h1 className="font-bold">{item.snippet.title}</h1>
            <p className="text-sm text-gray-700">{item.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
