import React, { Component } from "react";
import Microsites from "./../Microsites";
import Portfolio from "./../Portfolio/Portfolio";

class WhatSection extends Component {
  render() {
    return (
      <section id="what">
        <div className="screen1 screen">
          <h2>what</h2>
          <Portfolio />
        </div>
        <div className="screen2 screen">
          <div className="encapsulator">
            <h2>more about...</h2>
          </div>
          <Microsites />
        </div>
      </section>
    );
  }
}

export default WhatSection;
