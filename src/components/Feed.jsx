import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Feed = () => {
  return (
    <div className="w-[83%] ml-5 flex gap-4 flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Feed;
