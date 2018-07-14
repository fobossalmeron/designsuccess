import React, { Component } from "react";
import SectionPortfolio from "./portfolioSection";
import ProyectPortfolio from "./portfolioProyect";
import ResourcePortfolio from "./portfolioResource";
import portfolioData from "./../../data/portfolio";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: portfolioData.sections[0],
      selectedProyect: portfolioData.sections[0].proyects[0],
      selectedResource: portfolioData.sections[0].proyects[0].resources[0],
      sectionToggled: false,
      proyectToggled: false,
      resourceToggled: false
    };
  }

  closeSection() {
    this.setState({
      sectionToggled: false
    });
  }

  closeProyect() {
    this.setState({
      proyectToggled: false
    });
  }

  closeResource() {
    this.setState({
      resourceToggled: false
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

  toggleSection(section) {
    console.log("section Toggled");
    this.setState({
      sectionToggled: true,
      proyectToggled: false,
      resourceToggled: false,
      selectedSection: section
    });
  }

  toggleProyect(proyect) {
    console.log("proyectn Toggled");
    this.setState({
      sectionToggled: true,
      proyectToggled: true,
      resourceToggled: false,
      selectedProyect: proyect
    });
  }
  toggleResource(resource) {
    console.log("resource Toggled");
    if (window.innerWidth > 1000 && resource.type === "image") {
      console.log("resource was image and the browser is above 1000px");
      return;
    } else {
      this.setState({
        sectionToggled: true,
        proyectToggled: true,
        resourceToggled: true,
        selectedResource: resource
      });
    }
  }

  render() {
    var selectedSection = this.state.selectedSection;

    var sectionsList = portfolioData.sections.map((section, index) => (
      <li
        className="section"
        key={section.id}
        onClick={() => this.toggleSection(section)}
      >
        <h3
          dangerouslySetInnerHTML={{ __html: section.title }}
          className={selectedSection === section ? "active" : ""}
        />
        <div className={"sectionIcon " + "section" + section.id}>
          {section.icon}
        </div>
        <p dangerouslySetInnerHTML={{ __html: section.desc }} />
      </li>
    ));

    var sectionModal = (
      <SectionPortfolio
        sectionToggled={this.state.sectionToggled}
        proyectToggled={this.state.proyectToggled}
        section={this.state.selectedSection}
        sections={portfolioData.sections}
        toggleProyect={this.toggleProyect.bind(this)}
        changeSection={this.toggleSection.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeSection={this.closeSection.bind(this)}
      />
    );
    var proyectModal = (
      <ProyectPortfolio
        sectionToggled={this.state.sectionToggled}
        proyectToggled={this.state.proyectToggled}
        section={this.state.selectedSection}
        proyect={this.state.selectedProyect}
        closeProyect={this.closeProyect.bind(this)}
        toggleResource={this.toggleResource.bind(this)}
      />
    );
    var resourceModal = (
      <ResourcePortfolio
        resourceToggled={this.state.resourceToggled}
        proyectToggled={this.state.proyectToggled}
        section={this.state.selectedSection}
        proyect={this.state.selectedProyect}
        resource={this.state.selectedResource}
        toggleResource={this.toggleResource.bind(this)}
        closeResource={this.closeResource.bind(this)}
      />
    );

    var sectionActive = this.state.sectionToggled ? "sectionToggled" : null;
    return (
      <div className="sectionContainer">
        {proyectModal}
        {sectionModal}
        {resourceModal}
        <ul className={"sectionList " + sectionActive}>{sectionsList}</ul>
      </div>
    );
  }
}

export default Portfolio;
