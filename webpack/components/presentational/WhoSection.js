import React, { Component } from "react";
import Swiper from "react-id-swiper";
import DesignSuccess from "./../../../assets/img/layout/designSuccess.svg";
import MakingImpossible from "./../../../assets/img/layout/makingImpossible.svg";
import BestOf from "./../../../assets/img/layout/bestOf.svg";
import { isMobileSafari, osVersion, browserVersion } from "react-device-detect";

class WhoSection extends Component {
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
  }
  componentDidMount() {
    this.refs.video.setAttribute("muted", true);
    this.refs.video.pause();
    this.playVideo();

    console.log(
      "is mobile safari: " +
        isMobileSafari +
        ". Os version is: " +
        osVersion +
        " browser Version is: " +
        browserVersion
    );
  }

  playVideo() {
    this.refs.video.play();
    var myself = this;
    setTimeout(function() {
      myself.refs.video.play();
    }, 500);
  }
  render() {
    const params = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      touchReleaseOnEdges: true,
      effect: "fade",
      allowTouchMove: false,
      touchMoveStopPropagation: false,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: true,
        stopOnLastSlide: true
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
            <div data-swiper-autoplay="4000">
              <div className="screen firstGrid">
                <DesignSuccess className="animLogo" />
                <h1>
                  <MakingImpossible />
                </h1>
              </div>
            </div>

            <div data-swiper-autoplay="6000">
              <div className="screen firstGrid secondFirstGrid">
                <DesignSuccess className="animLogo" />
                <h1>
                  <MakingImpossible />
                </h1>
                <p>
                  We are a global team who innovate business solutions to impact
                  and reinvent iconic brands, their products, services,
                  solutions and experiences from a-to-z.
                  <br />
                  we, <b>design success</b>.
                </p>
              </div>
            </div>

            <div data-swiper-autoplay="6000">
              <div className="screen secondGrid">
                <DesignSuccess className="animLogo" />
                <h1>
                  <MakingImpossible />
                </h1>
                <p>
                  <b>Our patented, certified
and validated innovation
process is used to:</b>
                </p>
                <ul>
                <li>create digital transformation</li>
                <li>(re)position brands</li>
                <li>design new services and products</li>
                <li>create ultimate experiences</li>
                <li>communicate deeper and better</li>
                <li>impact shareholder value and stock price</li>
                </ul>
              </div>
            </div>

            <div data-swiper-autoplay="6000">
              <div className="screen thirdGrid">
                <DesignSuccess className="animLogo" />
                <h2>
                  <BestOf />
                </h2>
                <div>
                  <p>
                    The award winning <b>design:success</b>
                    <br />
                    team composes the best:
                  </p>
                  <ul>
                    <li>strategists</li>
                    <li>researchers</li>
                    <li>innovators</li>
                    <li>designers</li>
                    <li>architects</li>
                    <li>marketers</li>
                    <li>programmers</li>
                    <li>innovators</li>
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
