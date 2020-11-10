import "./MovieVideo.css";
import React from "react";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class MovieVideo extends React.Component {
  state = { videoDetails: [] };

  componentDidMount = async () => {
    const videoResponse = await Promise.all(
      this.props.children.map((video) =>
        youtube.get("/videos", {
          params: { id: video.key },
        })
      )
    );

    this.setState({ videoDetails: videoResponse });
  };

  renderContent() {
    return (
      <div>
        <div className="scrolling-wrapper dark">
          <VideoList videos={this.state.videoDetails} />
        </div>
      </div>
    );
  }

  render() {
    if (this.state.videoDetails.length === 0) return null;
    else return <div>{this.renderContent()}</div>;
  }
}

export default MovieVideo;
