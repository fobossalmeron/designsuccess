import React, { Component } from "react";
import PortfolioModal from "./portfolioModal";
import PortfolioSubModal from "./portfolioSubModal";
import portfolioData from "./../../data/portfolio";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: portfolioData.sections.find(
        section => section.id === 1,
      ),
      modalToggled: false,
      subModalToggled: false,
      selectedProyect: portfolioData.sections[0].proyects[0]
    };
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }
  
  closeSubModal(){
    this.setState({
      subModalToggled: false
    });
  }

  nextModal(selected) {
    var index = portfolioData.sections.indexOf(selected);
    if (index + 2 > portfolioData.sections.length) {
      var nextsectionName = portfolioData.sections[0];
    } else {
      var nextsectionName = portfolioData.sections[index + 1];
    }
    this.setState({
      selectedSection: nextsectionName
    });
  }

  prevModal(selected) {
    var index = portfolioData.sections.indexOf(selected);
    if (index - 1 < 0) {
      var nextsectionName =
        portfolioData.sections[portfolioData.sections.length - 1];
    } else {
      var nextsectionName = portfolioData.sections[index - 1];
    }
    this.setState({
      selectedSection: nextsectionName
    });
  }

  toggleModal(selected) {
    this.setState({
      modalToggled: true,
      subModalToggled: false,
      selectedSection: selected
    });
  }

  toggleSubModal(proyect) {
    this.setState({
      modalToggled: true,
      subModalToggled: true,
      selectedProyect: proyect
    });
  }

  render() {
    const { modalToggled } = this.state;
    var myself = this;
    var sectionsList = portfolioData.sections.map((section, index) => (
      <li
        className="section"
        key={section.id}
        onClick={() => this.toggleModal(section)}
      >
        <h3
          dangerouslySetInnerHTML={{ __html: section.title }}
          className={myself.state.selectedSection === section ? "active" : ""}
        />
        <div className={"sectionIcon " + "section" + section.id}>
          {section.icon}
        </div>
        <p dangerouslySetInnerHTML={{ __html: section.desc }} />
      </li>
    ));
    var sectionModal = (
      <PortfolioModal
        modalToggled={this.state.modalToggled}
        subModalToggled={this.state.subModalToggled}
        section={this.state.selectedSection}
        sections={portfolioData.sections}
        toggleSubModal={this.toggleSubModal.bind(this)}
        changeSection={this.toggleModal.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
      />
    );
    var proyectModal = (
      <PortfolioSubModal
        modalToggled={this.state.modalToggled}
        subModalToggled={this.state.subModalToggled}
        section={this.state.selectedSection}
        proyect={this.state.selectedProyect}
        toggleSubModal={this.toggleSubModal.bind(this)}
        closeSubModal={this.closeSubModal.bind(this)}
      />
    );

    var modalActive = this.state.modalToggled ? "modalToggled" : null;
    return (
      <div className="sectionContainer">
          {proyectModal}
          {sectionModal}
        <ul className={"sectionList " + modalActive}>{sectionsList}</ul>
      </div>
    );
  }
}

export default Portfolio;
