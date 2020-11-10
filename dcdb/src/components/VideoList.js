import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={videos.indexOf(video)} video={video} />;
  });
  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;
