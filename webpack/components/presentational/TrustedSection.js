import React, { Component } from 'react';
import ReactPlayer from "react-player";
import NikeIcon from 'svg-react-loader?name=NikeIcon!../../../assets/img/clients/clientNike.svg';
import CocaColaIcon from 'svg-react-loader?name=CocaColaIcon!../../../assets/img/clients/clientCocaCola.svg';
import ChanelIcon from 'svg-react-loader?name=ChanelIcon!../../../assets/img/clients/clientChanel.svg';
import PradaIcon from 'svg-react-loader?name=PradaIcon!../../../assets/img/clients/clientPrada.svg';
import SanofiIcon from 'svg-react-loader?name=SanofiIcon!../../../assets/img/clients/clientSanofi.svg';
import MoneyGramIcon from 'svg-react-loader?name=MoneyGramIcon!../../../assets/img/clients/clientMoneyGram.svg';
import PfizerIcon from 'svg-react-loader?name=PfizerIcon!../../../assets/img/clients/clientPfizer.svg';
import CampbellsIcon from 'svg-react-loader?name=CampbellsIcon!../../../assets/img/clients/clientCampbells.svg';
import AmigoincIcon from 'svg-react-loader?name=AmigoincIcon!../../../assets/img/clients/clientAmigoinc.svg';
import CapitalOneIcon from 'svg-react-loader?name=CapitalOneIcon!../../../assets/img/clients/clientCapitalOne.svg';
import BaseFIcon from 'svg-react-loader?name=BaseFIcon!../../../assets/img/clients/clientBaseF.svg';
import NovartisIcon from 'svg-react-loader?name=NovartisIcon!../../../assets/img/clients/clientNovartis.svg';
import DiageoIcon from 'svg-react-loader?name=DiageoIcon!../../../assets/img/clients/clientDiageo.svg';
import KraftIcon from 'svg-react-loader?name=KraftIcon!../../../assets/img/clients/clientKraft.svg';
import PepsicoIcon from 'svg-react-loader?name=PepsicoIcon!../../../assets/img/clients/clientPepsico.svg';
import BMWIcon from 'svg-react-loader?name=BMWIcon!../../../assets/img/clients/clientBMW.svg';
import BossIcon from 'svg-react-loader?name=BossIcon!../../../assets/img/clients/clientBoss.svg';

class TrustedSection extends Component {

  render (){

    return (
      <section id="trustedby">
      <div className="firstColumned">
        <div>
            <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat.<span>“</span></p>
            <label>-Jack Albert. CEO “globalinc”</label>
          </div>
          <div>
            <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat.<span>“</span></p>
            <label>-Jack Albert. CEO “globalinc”</label>
      </div>
      </div>
              <div className="trustedGrid">
                <CocaColaIcon />
                <PepsicoIcon />
                <ChanelIcon />
                <BossIcon />
                <PradaIcon />
                <KraftIcon/>
                <SanofiIcon/>
                <PfizerIcon/>
                <ReactPlayer url="https://vimeo.com/277716867"/>
                <NovartisIcon />
                <div>
                  <NikeIcon/>
                  <p className="detailBox">
                    NIKE. Insight and innovation exploration of running and female
                    apparel. Identified winning concepts for future trends and
                    business segments
                  </p>
                </div>
                <MoneyGramIcon/>
                <CapitalOneIcon />
                <BaseFIcon/>
                <AmigoincIcon/>
                <BMWIcon/>
                <CampbellsIcon/>
              </div>
    </section>
    );
  }
};

export default TrustedSection;
