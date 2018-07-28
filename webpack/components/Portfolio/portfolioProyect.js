import React, { Component } from "react";
import PlayIcon from "./../../../assets/img/layout/playButton.svg";

class ProyectPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var proyect = this.props.proyect;
    var section = this.props.section;
    var resourcesList = proyect.resources.map((resource, index) => (
      <li
        key={index + "sublisted"}
        className={"resource" + resource.id + (resource.type !== "video" ? " static" : "")}
        onClick={() => this.props.toggleResource(resource)}
        style={{
          backgroundSize: `${resource.type === "vector"? "contain" : ""}`,
          backgroundImage: `url(assets/img/portfolio/${section.id}/${
            proyect.id
          }/${resource.id}.${resource.type === "vector"? "svg" : "jpg"})`
        }}
      >
        {resource.type === "video" ? <PlayIcon /> : null}
      </li>
    ));
    return (
      <div
        className={
          this.props.proyectToggled
            ? "sectionModal proyectModal active2"
            : "sectionModal proyectModal"
        }
      >
        <a className="close" onClick={() => this.props.closeProyect()} />
        <a className="next" onClick={() => this.props.nextProyect(proyect)} />
        <a
          className="next prev"
          onClick={() => this.props.prevProyect(proyect)}
        />
        <div className="textArea">
          <h3 dangerouslySetInnerHTML={{ __html: proyect.title }} />
          <p dangerouslySetInnerHTML={{ __html: proyect.text }} />
        </div>
        <ul className="galleryArea" id={"section" + section.id + "proyect" + proyect.id}>
          {resourcesList}
        </ul>
      </div>
    );
  }
}

export default ProyectPortfolio;
