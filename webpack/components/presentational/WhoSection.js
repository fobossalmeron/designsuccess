import React, { Component } from "react";
import Swiper from "react-id-swiper";
import DesignSuccess from "svg-react-loader?name=DesignSuccess!../../../assets/img/layout/designSuccess.svg";
import MakingImpossible from "svg-react-loader?name=MakingImpossible!../../../assets/img/layout/makingImpossible.svg";
import BestOf from "svg-react-loader?name=BestOf!../../../assets/img/layout/bestOf.svg";

class WhoSection extends Component {
  render() {
    const params = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade",
      freeModeMomentum: false,
      freeMode: false,
      freeModeMinimumVelocity: 1000000000,
      fadeEffect: {
        crossFade: true
      },
      mousewheel: {
        releaseOnEdges: true,
        sensitivity: 0
      },
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
                  <br />we, <b>design success</b>.
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
            src="assets/video/intro.mp4"
            preload="auto"
            autoPlay
            muted
            playing
            loop
            playsInline
          />
        </div>
      </section>
    );
  }
}

export default WhoSection;
