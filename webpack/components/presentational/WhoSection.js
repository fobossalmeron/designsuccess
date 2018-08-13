import React, { Component } from "react";
import Swiper from "react-id-swiper";
import DesignSuccess from "./../../../assets/img/layout/designSuccess.svg";
import MakingImpossible from "./../../../assets/img/layout/makingImpossible.svg";
import BestOf from "./../../../assets/img/layout/bestOf.svg";

class WhoSection extends Component {
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
  }
  componentDidMount() {
    this.refs.video.setAttribute("muted", true);
    this.refs.video.pause();
    this.playVideo();
  }

  playVideo() {
    this.refs.video.play();
    var myself = this
    setTimeout(function() {
      myself.refs.video.play();
    }, 500);
  }
  render() {
    const params = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      mousewheel: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    };
    return (
      <section id="home">
        <div className="overVideo">
          <Swiper {...params}>
            <div>
              <div className="screen firstGrid">
                <DesignSuccess className="animLogo" />
                <h1>
                  <MakingImpossible />
                </h1>
              </div>
            </div>

            <div>
              <div className="screen firstGrid secondFirstGrid">
                <DesignSuccess className="animLogo" />
                <h1>
                  <MakingImpossible />
                </h1>
                <p>
                  we are a global team that innovate, impact and (re)- invent
                  iconic brands, their products, services and experiences from
                  a-to-z.
                  <br />
                  we, <b>design success</b>.
                </p>
              </div>
            </div>

            <div>
              <div className="screen secondGrid">
                <DesignSuccess className="animLogo" />
                <h1>
                  <MakingImpossible />
                </h1>
                <p>
                  <b>
                    our patented, certified and validated innovation process is
                    used to:
                  </b>
                </p>
                <ul>
                  <li>(re)position brands</li>
                  <li>design new services and products</li>
                  <li>create ultimate experiences</li>
                  <li>develop new digital interaction</li>
                  <li>communicate deeper and better</li>
                  <li>impact shareholder value and stock price</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="screen thirdGrid">
                <DesignSuccess className="animLogo" />
                <h2>
                  <BestOf />
                </h2>
                <div>
                  <p>
                    The award winning <b>design:success</b>
                    <br />
                    team composes the best minds:
                  </p>
                  <ul>
                    <li>strategists</li>
                    <li>researchers</li>
                    <li>innovators</li>
                    <li>designers</li>
                    <li>architects</li>
                    <li>marketers</li>
                    <li>programmers</li>
                    <li>all expert innovators</li>
                  </ul>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
          <video
            src="/assets/video/intro.mp4"
            ref="video"
            autoPlay
            muted
            loop
            playsInline
            key="playOne"
          />
        </div>
      </section>
    );
  }
}

export default WhoSection;
