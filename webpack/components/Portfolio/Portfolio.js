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
      resourceToggled: false,
      videoPlaying: false
    };
  }

  closeSection() {
    this.setState({
      sectionToggled: false,
      proyectToggled: false,
      resourceToggled: false,
      videoPlaying: false
    });
  }

  closeProyect() {
    this.setState({
      proyectToggled: false,
      resourceToggled: false,
      videoPlaying: false
    });
  }

  closeResource() {
    this.setState({
      resourceToggled: false,
      videoPlaying: false,
      selectedResource: portfolioData.sections[0].proyects[0].resources[0]
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
      selectedSection: nextsectionName,
      videoPlaying: false,
      resourceToggled: false
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
      selectedSection: nextsectionName,
      videoPlaying: false,
      resourceToggled: false
    });
  }

  nextProyect(selectedProyect) {
    var indexOfSelectedSection = portfolioData.sections.indexOf(
      this.state.selectedSection
    );
    var index = portfolioData.sections[indexOfSelectedSection].proyects.indexOf(
      selectedProyect
    );
    if (
      index + 2 >
      portfolioData.sections[indexOfSelectedSection].proyects.length
    ) {
      var nextproyectName =
        portfolioData.sections[indexOfSelectedSection].proyects[0];
    } else {
      var nextproyectName =
        portfolioData.sections[indexOfSelectedSection].proyects[index + 1];
    }
    this.setState({
      selectedProyect: nextproyectName,
      videoPlaying: false,
      resourceToggled: false
    });
  }

  prevProyect(selectedProyect) {
    var indexOfSelectedSection = portfolioData.sections.indexOf(
      this.state.selectedSection
    );
    var index = portfolioData.sections[indexOfSelectedSection].proyects.indexOf(
      selectedProyect
    );
    if (index - 1 < 0) {
      var nextproyectName =
        portfolioData.sections[indexOfSelectedSection].proyects[
          portfolioData.sections[indexOfSelectedSection].proyects.length - 1
        ];
    } else {
      var nextproyectName =
        portfolioData.sections[indexOfSelectedSection].proyects[index - 1];
    }
    this.setState({
      selectedProyect: nextproyectName,
      videoPlaying: false,
      resourceToggled: false
    });
  }

  toggleSection(section) {
    this.setState({
      sectionToggled: true,
      selectedSection: section,
      proyectToggled: false,
      resourceToggled: false,
      videoPlaying: false
    });
  }

  toggleSectionAndProyect(section, proyect) {
    this.setState({
      sectionToggled: true,
      selectedSection: section,
      proyectToggled: true,
      selectedProyect: proyect,
      resourceToggled: false,
      videoPlaying: false
    });
  }

  toggleProyect(proyect) {
    this.setState({
      sectionToggled: true,
      proyectToggled: true,
      resourceToggled: false,
      selectedProyect: proyect,
      videoPlaying: false
    });
  }

  toggleResource(resource) {
    console.log("resource toggled");
    if (
      window.innerWidth > 1000 &&
      (resource.type === "image" || resource.type === "vector")
    ) {
      console.log(
        "resource was image or vector and the browser is above 1000px"
      );
      return;
    } else if (resource.type === "video") {
      this.setState({
        sectionToggled: true,
        //proyectToggled: true,
        resourceToggled: true,
        selectedResource: resource,
        videoPlaying: true
      });
    } else {
      this.setState({
        sectionToggled: true,
        //proyectToggled: true,
        resourceToggled: true,
        selectedResource: resource,
        videoPlaying: false
      });
    }
  }

  
  render() {
    var selectedSection = this.state.selectedSection;

    var NormalView = (section) =>(
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
    )

    var TransformView = (section) =>(
      <li
      className="section"
      key={section.id}
      onClick={() => this.toggleSectionAndProyect(section, section.proyects[0])}
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
    )

    var sectionsList = portfolioData.sections.map((section, index) => {
      if (section.id === 6){
        //return TransformView(section)
        return NormalView(section)

      }
      else{
        return NormalView(section)
        }
    });

    var sectionModal = (
      <SectionPortfolio
        sectionToggled={this.state.sectionToggled}
        proyectToggled={this.state.proyectToggled}
        section={this.state.selectedSection}
        sections={portfolioData.sections}
        toggleProyect={this.toggleProyect.bind(this)}
        toggleResource={this.toggleResource.bind(this)}
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
        prevProyect={this.prevProyect.bind(this)}
        nextProyect={this.nextProyect.bind(this)}
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
        videoPlaying={this.state.videoPlaying}
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
