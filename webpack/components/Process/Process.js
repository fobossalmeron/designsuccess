import React, { Component } from "react";
import ProcessModal from "./processModal";
import InmersionIcon from "./../../../assets/img/iso/inmersion.svg";
import DepthIcon from "./../../../assets/img/iso/depth.svg";
import ConceptualIcon from "./../../../assets/img/iso/conceptual.svg";
import InnovationIcon from "./../../../assets/img/iso/innovation.svg";
import CoreIcon from "./../../../assets/img/iso/core.svg";
import ImplementationIcon from "./../../../assets/img/iso/implementation.svg";

const processData = {
  processes: [
    {
      id: 1,
      title: "1:<br/>Immersion",
      desc:
        "It all starts with our renowned innovation:vision workshop. Together with our clients, we define the vision, scope and brief.</br></br>We dig deeper and utilize all the expert tools available. The outcome is our proprietary opportunity mapping where we outline unique untapped directions.",
      icon: <InmersionIcon />
    },
    {
      id: 2,
      title: "2:<br/>in depth insights",
      desc:
        "We tailor each project we select with the best methodologies to get real, in-depth insights: interception, one-on-one interviews, qualitative, quantitative research and our proprietary QualQuant™; fusing qualitative and quantitative simultaneously.</br></br>Our in-depth reports are exceptionally detailed exposing the real in-depth insights through writing and video.",
      icon: <DepthIcon />
    },
    {
      id: 3,
      title: "3:<br/>strategic conceptual development",
      desc:"Our strategic, business, innovation and creative teams co-create strategic platforms, solutions, designs and communications – all based on fitting project vision and identified in-depth insights. Normally innovations agencies stop here – we keep going.",
      icon: <ConceptualIcon />
    },
    {
      id: 4,
      title: "4:<br/>validation : innovation : lab",
      desc:"Our world famous, patented and certified process utilizes sequential, qualitative and quantitative research methodologies. We will identify the most impactful innovations and solutions. We guarantee the winning innovation will have a minimum 85% deep buy-in from your target – or we continue for free until we reach it!",
      icon: <InnovationIcon />
    },
    {
      id: 5,
      title: "5:<br/>validated core concept",
      desc: "We take the winning innovations and solutions to create the perfect mix of market and implementation strategies and in turn prepare for perfect implementation.",
      icon: <CoreIcon />
    },
    {
      id: 6,
      title: "6:<br/>implementation",
      desc:
        "The best innovations need the best development & implementation – which we do:<ul><li><b>Branding</b></li><li><b>2D & 3D design</b> ready for supply-chain</li><li><b>ATL Communication</b> incl. high-value production</li><li><b>Social / digital campaigns</b> incl. influencer platform</li><li><b>Architecture</b> – incl. in-store</li><li><b>IT / digital development</b> – incl. application and enterprise solutions</li></ul>",
      icon: <ImplementationIcon />
    }
  ]
};

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProcess: "",
      modalToggled: false
    };
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }

  nextModal(selected) {
    var index = processData.processes.indexOf(selected);
    if (index + 2 > processData.processes.length) {
      var nextProcessName = processData.processes[0];
    } else {
      var nextProcessName = processData.processes[index + 1];
    }
    this.setState({
      selectedProcess: nextProcessName
    });
  }

  prevModal(selected) {
    var index = processData.processes.indexOf(selected);
    if (index - 1 < 0) {
      var nextProcessName =
        processData.processes[processData.processes.length - 1];
    } else {
      var nextProcessName = processData.processes[index - 1];
    }
    this.setState({
      selectedProcess: nextProcessName
    });
  }

  toggleModal(selected) {
    if (window.innerWidth < 1250) {
      this.setState({
        modalToggled: true,
        selectedProcess: selected
      });
    }
  }

  render() {
    var processesList = processData.processes.map((process, index) => (
      <li
        className="process"
        key={process.id}
        onClick={() => this.toggleModal(process)}
      >
        <h3 dangerouslySetInnerHTML={{ __html: process.title }} />
        <div className={"processIcon " + "process" + process.id}>
          {process.icon}
        </div>
        <p dangerouslySetInnerHTML={{ __html: process.desc }} />
      </li>
    ));
    var processModal = (
      <ProcessModal
        process={this.state.selectedProcess}
        processes={processData.processes}
        changeProcess={this.toggleModal.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
      />
    );

    var isModalToggled = this.state.modalToggled ? processModal : null;
    var mobileAway = this.state.modalToggled ? "hideMe" : null;
    return (
      <div className="processContainer">
        {isModalToggled}
        <ul className={"processList " + mobileAway}>
          <h4>our patented & ISO:9001 certified process</h4>
          {processesList}
        </ul>
      </div>
    );
  }
}

export default Process;
