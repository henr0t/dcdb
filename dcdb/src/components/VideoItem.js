import React from "react";

const VideoItem = ({ video }) => {
  if (video.data.items[0]) {
    const { thumbnails, localized } = video.data.items[0].snippet;

    return (
      <div className="thumbnail">
        <a href={"http://www.youtube.com/watch?v=" + video.data.items[0].id}>
          <img
            className="image"
            alt={localized.title}
            title={localized.title}
            src={thumbnails.medium.url}
          />
          <span className="caption">
            {localized.title.substring(0, 45).concat("...")}
          </span>
        </a>
      </div>
    );
  } else return null;
};

export default VideoItem;
