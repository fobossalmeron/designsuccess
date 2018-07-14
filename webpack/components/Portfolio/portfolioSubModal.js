import React, { Component } from "react";
import PlayIcon from "svg-react-loader?name=PlayIcon!../../../assets/img/layout/playButton.svg";

class PortfolioSubModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var proyect = this.props.proyect;
    var section = this.props.section;
    var resourcesList = proyect.resources.map((resource, index) => (
      <li
        key={index + "sublisted"}
        className={"resource" + (index + 1) + (resource.type !== "video" ? " static" : null)}
        onClick={() => console.log("sub modal toggled " + index)}
        style={{
          backgroundImage: `url(assets/img/portfolio/${section.id}/${
            proyect.id
          }/${index + 1}.jpg)`
        }}
      >
        {resource.type === "video" ? <PlayIcon /> : null}
      </li>
    ));
    return (
      <div
        className={
          this.props.subModalToggled
            ? "sectionModal proyectModal active2"
            : "sectionModal proyectModal"
        }
      >
        <a className="close" onClick={() => this.props.closeSubModal()} />
        <a className="next" onClick={() => this.props.nextModal(proyect)} />
        <a
          className="next prev"
          onClick={() => this.props.prevModal(proyect)}
        />
        <div className="textArea">
          <h3 dangerouslySetInnerHTML={{ __html: proyect.title }} />
          <p dangerouslySetInnerHTML={{ __html: proyect.text }} />
        </div>
        <ul className="galleryArea" id={"proyect" + proyect.id}>
          {resourcesList}
        </ul>
      </div>
    );
  }
}

export default PortfolioSubModal;
