import React, { Component } from "react";

class PortfolioModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var section = this.props.section;
    var proyectList = this.props.section.proyects.map((proyect, index) => (
      <li
        key={proyect.id + "listed"}
        className={"proyect" + proyect.id}
        onClick={() => this.props.changeSection(section)}
        style={{backgroundImage:`url(assets/img/portfolio/${section.id}/${proyect.id}/cover.jpg)`}}
      >
        <h5>{proyect.title}</h5>
      </li>
    ));
    var sectionId = "section" + section.id;
    return (
      <div className="sectionModal">
        <a className="close" onClick={() => this.props.closeModal()} />
        <a className="next" onClick={() => this.props.nextModal(section)} />
        <a
          className="next prev"
          onClick={() => this.props.prevModal(section)}
        />
        <div className="textArea">
          <h3 dangerouslySetInnerHTML={{ __html: section.title }} />
          <p dangerouslySetInnerHTML={{ __html: section.generalText }} />
        </div>
        <ul className="galleryArea" id={"section" + section.id}>{proyectList}</ul>
      </div>
    );
  }
}

export default PortfolioModal;
