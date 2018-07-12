import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Quotes from "./../Trusted/Quotes";
import PlayIcon from "svg-react-loader?name=PlayIcon!../../../assets/img/layout/playButton.svg";
import NikeIcon from "svg-react-loader?name=NikeIcon!../../../assets/img/clients/clientNike.svg";
import CocaColaIcon from "svg-react-loader?name=CocaColaIcon!../../../assets/img/clients/clientCocaCola.svg";
import ChanelIcon from "svg-react-loader?name=ChanelIcon!../../../assets/img/clients/clientChanel.svg";
import PradaIcon from "svg-react-loader?name=PradaIcon!../../../assets/img/clients/clientPrada.svg";
import SanofiIcon from "svg-react-loader?name=SanofiIcon!../../../assets/img/clients/clientSanofi.svg";
import MoneyGramIcon from "svg-react-loader?name=MoneyGramIcon!../../../assets/img/clients/clientMoneyGram.svg";
import PfizerIcon from "svg-react-loader?name=PfizerIcon!../../../assets/img/clients/clientPfizer.svg";
import CampbellsIcon from "svg-react-loader?name=CampbellsIcon!../../../assets/img/clients/clientCampbells.svg";
import AmigoincIcon from "svg-react-loader?name=AmigoincIcon!../../../assets/img/clients/clientAmigoinc.svg";
import CapitalOneIcon from "svg-react-loader?name=CapitalOneIcon!../../../assets/img/clients/clientCapitalOne.svg";
import BaseFIcon from "svg-react-loader?name=BaseFIcon!../../../assets/img/clients/clientBaseF.svg";
import NovartisIcon from "svg-react-loader?name=NovartisIcon!../../../assets/img/clients/clientNovartis.svg";
import DiageoIcon from "svg-react-loader?name=DiageoIcon!../../../assets/img/clients/clientDiageo.svg";
import KraftIcon from "svg-react-loader?name=KraftIcon!../../../assets/img/clients/clientKraft.svg";
import PepsicoIcon from "svg-react-loader?name=PepsicoIcon!../../../assets/img/clients/clientPepsico.svg";
import BMWIcon from "svg-react-loader?name=BMWIcon!../../../assets/img/clients/clientBMW.svg";
import BossIcon from "svg-react-loader?name=BossIcon!../../../assets/img/clients/clientBoss.svg";

class TrustedSection extends Component {
  constructor() {
    super();
    this.state = {};
    this.doOpenModal = this.doOpenModal.bind(this);
    this.doCloseModal = this.doCloseModal.bind(this);
  }
  doOpenModal() {
    this.props.openModal();
  }

  doCloseModal() {
    this.props.closeModal();
  }
  render() {
    return (
      <section id="trustedby">
        <Quotes/>
        <div className="trustedGrid">
          <Modal
            isOpen={this.props.modalOpen}
            onRequestClose={this.doCloseModal}
            contentLabel="Video Modal"
            className="modal"
            overlayClassName="overlay"
            onClick={this.doCloseModal}
          >
            <a className="close" onClick={this.doCloseModal} />
            <ReactPlayer url="https://vimeo.com/277716867" className="video" />
          </Modal>
          <CocaColaIcon />
          <PepsicoIcon />
          <ChanelIcon />
          <BossIcon />
          <PradaIcon />
          <KraftIcon />
          <SanofiIcon />
          <PfizerIcon />
          <div className="trustedVideo" onClick={() => this.props.openModal()}>
            <div className="trustedImage">
              <PlayIcon />
            </div>
            <p>what our clients say about us</p>
          </div>
          <NovartisIcon />
          <div>
            <NikeIcon />
            <p className="detailBox">
              NIKE. Insight and innovation exploration of running and female
              apparel. Identified winning concepts for future trends and
              business segments
            </p>
          </div>
          <MoneyGramIcon />
          <CapitalOneIcon />
          <BaseFIcon />
          <AmigoincIcon />
          <BMWIcon />
          <CampbellsIcon />
        </div>
      </section>
    );
  }
}

export default TrustedSection;
