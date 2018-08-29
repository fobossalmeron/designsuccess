import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Process from "./../Process/Process.js";

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
        <h4>video: our patented & ISO:9001 certified process</h4>
        <ReactPlayer className="video" url="https://vimeo.com/286558912" />
        <h2>how</h2>
        <h4 id="outOfGrid">our patented & ISO:9001 certified process</h4>
        <Process />
      </section>
    );
  }
}

export default HowSection;
