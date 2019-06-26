import React, { Component } from "react";
import ReactPlayer from "react-player";
import PlayIcon from "./../../../assets/img/layout/playButton.svg";

class SectionPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var section = this.props.section;

    var normalView = proyect => (
      <React.Fragment key={proyect.id + "listed_"}>
        <li
          key={proyect.id + "listed"}
          className={"proyect" + proyect.id}
          onClick={() => this.props.toggleProyect(proyect)}
          style={{
            backgroundSize: `${
              proyect.coverType !== undefined && proyect.coverType === "vector"
                ? "contain"
                : ""
            }`,
            backgroundImage: `url(/assets/img/portfolio/${section.id}/${
              proyect.id
            }/cover.${
              proyect.coverType !== undefined && proyect.coverType === "vector"
                ? "svg"
                : "jpg"
            })`
          }}
        >
          <h5>{proyect.title}</h5>
        </li>
      </React.Fragment>
    );

    var transformView = proyect => (
      <React.Fragment key={proyect.id + "exlisted_"}>
        <li
          key={proyect.id + "exlisted"}
          className={
            "resource" +
            proyect.resources[0].id +
            (proyect.resources[0].type !== "video" ? " static" : "")
          }
          onClick={() => this.props.toggleResource(proyect.resources[0])}
          style={{
            backgroundSize: `${proyect.resources[0].type === "vector" ? "contain" : ""}`,
            backgroundImage: `url(/assets/img/portfolio/${section.id}/${
              proyect.id
            }/${proyect.resources[0].id}.${proyect.resources[0].type === "vector" ? "svg" : "jpg"})`
          }}
        >
          {proyect.resources[0].type === "video" ? <PlayIcon /> : null}
        </li>
      </React.Fragment>
    );

    var proyectList = section.proyects.map((proyect, index) => {
      if (section.id === 6) {
        return transformView(proyect)
        //return normalView(proyect);
      } else {
        return normalView(proyect);
      }
    });
    return (
      <div
        className={
          this.props.sectionToggled ? "sectionModal active" : "sectionModal"
        }
      >
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
