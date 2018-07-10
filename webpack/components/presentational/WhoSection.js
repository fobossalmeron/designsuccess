import React, { Component } from "react";
import ReactPlayer from "react-player";
import DesignSuccess from "svg-react-loader?name=DesignSuccess!../../../assets/img/layout/designSuccess.svg";

class WhoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidMount() {
    this.setState({ playing: true });
  }

  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <DesignSuccess className="mainLogo" />
          <h1>making impossible possible</h1>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
          <ReactPlayer
            url="assets/video/intro.mp4"
            playing={this.state.playing}
            loop={true}
            muted={true}
            playsinline={true}
          />
        </div>
      </section>
    );
  }
}

export default WhoSection;
