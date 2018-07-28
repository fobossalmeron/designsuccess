import React, { Component } from "react";
import HamburgerIcon from "./../../assets/img/layout/hamburger.svg";
import DesignSuccess from "./../../assets/img/layout/designSuccess.svg";
import DesignSuccessMobile from "./../../assets/img/layout/designSuccessMobile.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }
  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToWho(event) {
    this.props.closeModal();
    if (typeof this.props.scrollToWho !== "undefined") {
      event.preventDefault();
      this.props.scrollToWho();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#who");
      }
    }
  }

  doScrollToWhat(event) {
    this.props.closeModal();
    if (typeof this.props.scrollToWhat !== "undefined") {
      event.preventDefault();
      this.props.scrollToWhat();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#what");
      }
    }
  }
  doScrollToHow() {
    this.props.closeModal();
    if (typeof this.props.scrollToHow !== "undefined") {
      event.preventDefault();
      this.props.scrollToHow();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#how");
      }
    }
  }
  doScrollToTrusted() {
    this.props.closeModal();
    if (typeof this.props.scrollToTrusted !== "undefined") {
      event.preventDefault();
      this.props.scrollToTrusted();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#trustedby");
      }
    }
  }
  doScrollToEngage() {
    this.props.closeModal();
    if (typeof this.props.scrollToEngage !== "undefined") {
      event.preventDefault();
      this.props.scrollToEngage();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#engage");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var navIsActive = this.state.menuToggled ? "navActive" : "";
    var navToggled = this.state.menuToggled ? "toggled" : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className="headerWrapper">
          <a
            onClick={() => {
              this.doHideNav();
              this.doScrollToWho(event);
            }}
            href={baseUrl + "#who"}
            className="hideText"
          >
            <DesignSuccess className="designSuccessLogo" />
            <DesignSuccessMobile className="designSuccessLogoMobile" />
            design:success
          </a>
          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active}>
            <ul>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToWho(event);
                }}
              >
                <a href={baseUrl + "#who"}>who</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToWhat(event);
                }}
              >
                <a href={baseUrl + "#what"}>what</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToHow(event);
                }}
              >
                <a href={baseUrl + "#how"}>how</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToTrusted();
                }}
              >
                <a href={baseUrl + "#trustedby"}>trusted by</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToEngage();
                }}
              >
                <a href={baseUrl + "#engage"}>engage</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
