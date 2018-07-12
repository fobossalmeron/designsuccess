import React, { Component } from "react";
import Nav from "./Nav";
import WhoSection from "./presentational/WhoSection";
import WhatSection from "./presentational/WhatSection";
import HowSection from "./presentational/HowSection";
import TrustedSection from "./presentational/TrustedSection";
import EngageSection from "./presentational/EngageSection";
import scrollToComponent from "react-scroll-to-component";
import InstagramIcon from "svg-react-loader?name=InstagramIcon!../../assets/img/social/instagram.svg";
import UnderConstructionIcon from "svg-react-loader?name=UnderConstruction!../../assets/img/underconstruction.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
      modalOpen: false,
      maintenance: false
    };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  hideNav() {
    this.setState({ menuOn: false });
  }

  initScrollMagic() {
    const script = document.createElement("script");
    script.src = "assets/js/scrollmagic.js";
    script.async = true;
    document.body.appendChild(script);
  }

  quitMaintenance() {
    this.setState({ maintenance: false });
    this.initScrollMagic();
  }

  componentDidMount() {
    if (this.state.maintenance == false) {
      this.initScrollMagic();
    }
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <div id="loadingvideo">
          <UnderConstructionIcon />
        </div>
        <div className="aboveVideo">
          <img src="assets/img/layout/logo.svg" />
          <img src="assets/img/layout/type.svg" />
          <div className="secondLanding">
            <h2 className="blue">we're</h2>
            <h2 className="yellow">redesigning</h2>
            <h2 className="pink">ourselves</h2>
          </div>
          <div className="follow">
            <p>
              follow us on
              <a
                href={"https://www.instagram.com/more.than.spaces/"}
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </p>
            <p>
              <a href="http://instagram.com/more.than.spaces/">
                @<span className="blue">more</span>.<span className="yellow">
                  than
                </span>.<span className="pink">spaces</span>
              </a>
            </p>
          </div>
        </div>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    );
    var app = (
      <div>
        <Nav
          toggleMenu={this.toggleMenu.bind(this)}
          hideNav={this.hideNav.bind(this)}
          menuOn={this.state.menuOn}
          closeModal={this.closeModal.bind(this)}
          scrollToWho={() =>
            scrollToComponent(this.Who, { offset: 0, align: "top" })
          }
          scrollToWhat={() =>
            scrollToComponent(this.What, { offset: -45, align: "top" })
          }
          scrollToHow={() =>
            scrollToComponent(this.How, { offset: -45, align: "top" })
          }
          scrollToTrusted={() =>
            scrollToComponent(this.Trusted, { offset: -45, align: "top" })
          }
          scrollToEngage={() =>
            scrollToComponent(this.Engage, { offset: -45, align: "top" })
          }
        />
        <WhoSection
          ref={section => {
            this.Who = section;
          }}
        />
        <WhatSection
          ref={section => {
            this.What = section;
          }}
        />
        <HowSection
          ref={section => {
            this.How = section;
          }}
          modalOpen={this.state.modalOpen}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
        <TrustedSection
          ref={section => {
            this.Trusted = section;
          }}
          modalOpen={this.state.modalOpen}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
        <EngageSection
          ref={section => {
            this.Engage = section;
          }}
        />
      </div>
    );
    var doRenderApp = this.state.maintenance ? maintenanceScreen : app;
    return doRenderApp;
  }
}

export default App;
