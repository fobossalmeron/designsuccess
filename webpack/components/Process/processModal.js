import React, { Component } from "react";

class ProcessModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var process = this.props.process;
    var processList = this.props.processes.map((process, index) => (
      <li
        key={process.id + "listed"}
        onClick={() => this.props.changeProcess(process)}
      >
        <span>{process.id}</span>
        <p>{process.title}</p>
      </li>
    ));
    var processId = "process" + process.id;
    var svg = (
      <div className={"processIcon " + processId}>{process.icon}</div>
    );
    return (
      <div className="processModal">
        <a className="close" onClick={() => this.props.closeModal()} />
        <a className="next" onClick={() => this.props.nextModal(process)} />
        <a
          className="next prev"
          onClick={() => this.props.prevModal(process)}
        />

        <h3 dangerouslySetInnerHTML={{ __html: process.title }} />
        {svg}
        <p dangerouslySetInnerHTML={{ __html: process.desc }} />
      </div>
    );
  }
}

export default ProcessModal;
