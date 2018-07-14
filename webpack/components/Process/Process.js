import React, { Component } from "react";
import ProcessModal from "./processModal";
import InmersionIcon from "svg-react-loader?name=InmersionIcon!../../../assets/img/iso/inmersion.svg";
import DepthIcon from "svg-react-loader?name=DepthIcon!../../../assets/img/iso/depth.svg";
import ConceptualIcon from "svg-react-loader?name=ConceptualIcon!../../../assets/img/iso/conceptual.svg";
import InnovationIcon from "svg-react-loader?name=InnovationIcon!../../../assets/img/iso/innovation.svg";
import CoreIcon from "svg-react-loader?name=CoreIcon!../../../assets/img/iso/core.svg";
import ImplementationIcon from "svg-react-loader?name=ImplementationIcon!../../../assets/img/iso/implementation.svg";


const processData = {
  processes: [
    {
      id: 1,
      title: "1:<br/>Immersion",
      desc:
        "It all starts with our renown <b>innovation:vision:workshop.</b><br/>Together with a client team we define the <b>vision, scope and brief.</b><br/><br/>We dig deep and utilize all expert tools available. Outcome is our proprietary and Opportunity Mapping is where <b>we outline unique untapped directions</b>.",
      icon: <InmersionIcon />
    },
    {
      id: 2,
      title: "2:<br/>in depth insights",
      desc:
        "Tailored to each project we select the <b>best methodologies</b> to get real in-depth insights: interception, one-on-one interviews, qualitative, quantitative research and our proprietary QualQuant™; fusing <b>qualitative and quantitative</b> simultaneously.<br/><br/>In-depth reports are exceptionally detailed <b>exposing the real</b> in-depth insights. In writing and video.",
      icon: <DepthIcon />
    },
    {
      id: 3,
      title: "3:<br/>strategic conceptual development",
      desc:
        "<b>Strategic, business, innovation</b> and creative co-create strategic platform, solutions, designs and communication – all based on fitting project vision and identified in-depth insights. <b>Normally innovations agencies stop here – we don’t.</b>",
      icon: <ConceptualIcon/>
    },
    {
      id: 4,
      title: "4:<br/>validation:innovation:lab",
      desc:
        "<b>Our world-famous, patented and certified process</b> that utilize sequential, qualitative and quantitative research methodologies will identify the most impactful innovation /solution. Guaranteed. <b>We guarantee that the winning innovation will have a minimum 85%</b> deep buy-in from your target – or we continue for free until we reach it!",
      icon: <InnovationIcon/>
    },
    {
      id: 5,
      title: "5:<br/>validated core concept",
      desc:
        "We take the winning innovation / solution and create the <b>perfect market and implementation strategy</b>. Preparing for a perfect implementation.",
      icon: <CoreIcon/>
    },
    {
      id: 6,
      title: "6:<br/>implementation",
      desc:
        "The best innovation need the best development & implementation – which we do:<ul><li><b>Branding</b></li><li><b>2D & 3D design</b> ready for supply-chain</li><li><b>ATL Communication</b> incl. high-value production</li><li><b>Social / digital campaigns</b> incl. influencer platform</li><li><b>Architecture</b> – incl. in-store</li><li><b>IT / digital development</b> – incl. application and enterprise solutions</li></ul>",
      icon: <ImplementationIcon/>
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
    if (window.innerWidth < 1000){
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
