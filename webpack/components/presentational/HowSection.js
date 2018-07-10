import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Process from "./../Process/Process.js";
import PlayButton from "svg-react-loader?name=PlayButton!../../../assets/img/layout/playButton.svg";
import ClientMoneyAmigo from "svg-react-loader?name=ClientMoneyAmigo!../../../assets/img/clients/clientMoneyAmigo.svg";
import ClientAmigoHealth from "svg-react-loader?name=ClientAmigoHealth!../../../assets/img/clients/clientAmigoHealth.svg";
import ClientFindSmile from "svg-react-loader?name=ClientFindSmile!../../../assets/img/clients/clientFindSmile.svg";
import ClientLudbeck from "svg-react-loader?name=ClientLudbeck!../../../assets/img/clients/clientLudbeck.svg";
import ClientMyBlueDoctor from "svg-react-loader?name=ClientMyBlueDoctor!../../../assets/img/clients/clientMyBlueDoctor.svg";
import ClientNovoNordisk from "svg-react-loader?name=ClientNovoNordisk!../../../assets/img/clients/clientNovoNordisk.svg";

Modal.setAppElement("#app");
class HowSection extends Component {
  constructor() {
    super();
    this.state = {
      chosenVideo: ""
    };
    this.doOpenModal = this.doOpenModal.bind(this);
    this.doCloseModal = this.doCloseModal.bind(this);
  }
  doOpenModal(video) {
    this.setState({ chosenVideo: video });
    this.props.openModal();
  }

  doCloseModal() {
    this.props.closeModal();
  }
  render() {
    return (
      <section id="how">
        <h2>how</h2>
        <h4>our patented & ISO:9001 certified process</h4>
        <ReactPlayer className="video" url="https://vimeo.com/277716813" />
        <h2>how</h2>
        <h4>our patented & ISO:9001 certified process</h4>
        <Process />
      </section>
    );
  }
}

export default HowSection;
