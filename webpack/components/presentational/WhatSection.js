import React, { Component } from "react";
import Microsites from "./../Microsites";
import NikeIcon from "svg-react-loader?name=NikeIcon!../../../assets/img/clients/clientNike.svg";
import CocaColaIcon from "svg-react-loader?name=CocaColaIcon!../../../assets/img/clients/clientCocaCola.svg";
import ChanelIcon from "svg-react-loader?name=ChanelIcon!../../../assets/img/clients/clientChanel.svg";
import MoneyGramIcon from "svg-react-loader?name=MoneyGramIcon!../../../assets/img/clients/clientMoneyGram.svg";
import CapitalOneIcon from "svg-react-loader?name=CapitalOneIcon!../../../assets/img/clients/clientCapitalOne.svg";
import BaseFIcon from "svg-react-loader?name=BaseFIcon!../../../assets/img/clients/clientBaseF.svg";
import NovartisIcon from "svg-react-loader?name=NovartisIcon!../../../assets/img/clients/clientNovartis.svg";
import DiageoIcon from "svg-react-loader?name=DiageoIcon!../../../assets/img/clients/clientDiageo.svg";
import KraftIcon from "svg-react-loader?name=KraftIcon!../../../assets/img/clients/clientKraft.svg";
import PepsicoIcon from "svg-react-loader?name=PepsicoIcon!../../../assets/img/clients/clientPepsico.svg";
import BMWIcon from "svg-react-loader?name=BMWIcon!../../../assets/img/clients/clientBMW.svg";
import BossIcon from "svg-react-loader?name=BossIcon!../../../assets/img/clients/clientBoss.svg";
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
