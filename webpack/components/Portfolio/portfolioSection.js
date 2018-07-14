import React, { Component } from "react";

class SectionPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var section = this.props.section;
    var proyectList = section.proyects.map((proyect, index) => (
      <li
        key={proyect.id + "listed"}
        className={"proyect" + proyect.id}
        onClick={() => this.props.toggleProyect(proyect)}
        style={{
          backgroundImage: `url(assets/img/portfolio/${section.id}/${
            proyect.id
          }/cover.jpg)`
        }}
      >
        <h5>{proyect.title}</h5>
      </li>
    ));
    return (
      <div className={this.props.sectionToggled? "sectionModal active" : "sectionModal"}>
        <a className="close" onClick={() => this.props.closeSection()} />
        <a className="next" onClick={() => this.props.nextModal(section)} />
        <a
          className="next prev"
          onClick={() => this.props.prevModal(section)}
        />
        <div className="textArea">
          <h3 dangerouslySetInnerHTML={{ __html: section.title }} />
          <p dangerouslySetInnerHTML={{ __html: section.generalText }} />
        </div>
        <ul className="galleryArea" id={"section" + section.id}>
          {proyectList}
        </ul>
      </div>
    );
  }
}

export default SectionPortfolio;
