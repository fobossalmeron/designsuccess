import React, { Component } from "react";
import ReactPlayer from "react-player";

class ResourcePortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var resource = this.props.resource;
    var proyect = this.props.proyect;
    var section = this.props.section;

    var imageResource = (
      <div
        className="imageResource"
        style={{
          backgroundImage: `url(assets/img/portfolio/${section.id}/${
            proyect.id
          }/${resource.id}.jpg)`
        }}
      />
    );

    var videoResource = (
      <ReactPlayer className="videoResource" url={resource.url} />
    );

    var resourceRender = resource.type === "video"? videoResource : imageResource;
    return (
      <div
        className={
          this.props.resourceToggled
            ? "sectionModal resourceModal active3"
            : "sectionModal resourceModal"
        }
      >
        <a className="close" onClick={() => this.props.closeResource()} />
        {resourceRender}
      </div>
    );
  }
}

export default ResourcePortfolio;
