import React, { Component } from "react";

const PortfolioModal = (props) => {
  const componentClasses = ["sectionModal"];
  if (props.modalToggled) {
    componentClasses.push("active");
  }
  return (
    <div className={componentClasses.join(" ")}>
      <a className="close" onClick={() => props.closeModal()} />
      <a className="next" onClick={() => props.nextModal(section)} />
      <a className="next prev" onClick={() => props.prevModal(section)} />
      <div className="textArea">
        <h3 dangerouslySetInnerHTML={{ __html: props.section.title }} />
        <p dangerouslySetInnerHTML={{ __html: props.section.generalText }} />
      </div>
      <ul className="galleryArea" id={"section" + props.section.id}>
        {props.section.proyects.map((proyect, index) => (
          <li
            key={proyect.id + "listed"}
            className={"proyect" + proyect.id}
            onClick={() => props.changeSection(props.section)}
            style={{
              backgroundImage: `url(assets/img/portfolio/${
                props.section.id
              }/${proyect.id}/cover.jpg)`
            }}
          >
            <h5>{proyect.title}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

PortfolioModal.propTypes = {
  modalToggled: React.PropTypes.bool.isRequired
};
PortfolioModal.defaultProps = {
  section: {id:1,title:"hi", icon: "hi"}
}

export default PortfolioModal;
