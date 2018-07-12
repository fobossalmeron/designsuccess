import React, { Component } from "react";
import PortfolioModal from "./portfolioModal";
import { Transition } from "react-transition-group";
import { CSSTransition } from 'react-transition-group';
import InnovationIcon from "svg-react-loader?name=InnovationIcon!../../../assets/img/what/innovation.svg";
import InsightIcon from "svg-react-loader?name=InsightIcon!../../../assets/img/what/insight.svg";
import BrandingIcon from "svg-react-loader?name=BrandingIcon!../../../assets/img/what/branding.svg";
import DigitalIcon from "svg-react-loader?name=DigitalIcon!../../../assets/img/what/digital.svg";
import MarketingIcon from "svg-react-loader?name=MarketingIcon!../../../assets/img/what/marketing.svg";
import SocialIcon from "svg-react-loader?name=SocialIcon!../../../assets/img/what/social.svg";

const sectionData = {
  sections: [
    {
      id: 1,
      title: "innovation",
      icon: <InnovationIcon />,
      generalText:
        "<b>360 degree A-to-Z innovation is design:success’</b> ultimate expertise. We create unified experiences, brands and sustainable businesses.</br></br> We are honored to do this and be trusted by the largest and most recognizable brands out there.</br></br> Innovated solutions impact the three most important audiences: customers, employees and shareholders.</br></br> Only design:success’ <b>proven, patented and certified</b> process delivers validated innovations that work. From strategy, brand creation, positioning to integrated products, services, digital and physical experiences, we are the partner in achieving, impacting and growing shareholder value. We design it all to become successful.",
      proyects: [
        {
          id: 1,
          title: "$ and innovation from a-to-z",
          text:
            "Global innovation transformation.</br></br>design:success was trusted to innovate for numerous MoneyGram’s global innovation projects. From insight gathering, innovation strategy, UI & IT development, brand optimization, experience creations as well as a US advertising campaign across all multiple platforms and targets, we shaped and actualized true 360 degree innovations from A-to-Z.</br></br> results:</br>Extremely high consumer satisfaction and growth in shareholder value.",
          images: [
            {
              type: "image"
            },
            {
              type: "video",
              url: "https://vimeo.com/219006755"
            },
            {
              type: "video",
              url: "https://vimeo.com/219010169"
            },
            {
              type: "image"
            },
            {
              type: "image"
            },
            {
              type: "image"
            }
          ]
        },
        {
          id: 2,
          title: "1% is a lot!",
          text:
            "challenge:</br>Increase profits in Coca-Cola’s carbonated beverage segment with fast implementable solutions.</br></br>solution:</br>We developed multiple fast implementable innovations then validated each one through our patented innovation:lab process. With rigorous analyzation we identified the right innovations to lift single serve sales. Increasing profitability by more than 1%, and 1% is a lot when you are The Coca-Cola Company.</br></br>result:</br>Sales exceeded 1% within 6 months",
          images: []
        },
        {
          id: 3,
          title: "strategy in 40 days!",
          text: "",
          images: []
        },
        {
          id: 4,
          title: "first innovation in 500 years",
          text: "",
          images: []
        },
        {
          id: 5,
          title: "the sky’s the limit",
          text: "",
          images: []
        },
        {
          id: 6,
          title: "creating a real friend",
          text: "",
          images: []
        }
      ]
    },
    {
      id: 2,
      title: "insight & strategy",
      icon: <InsightIcon />,
      proyects: []
    },
    {
      id: 3,
      title: "branding & design",
      icon: <BrandingIcon />,
      proyects: []
    },
    {
      id: 4,
      title: "marketing</br>& communication",
      icon: <MarketingIcon />,
      proyects: []
    },
    {
      id: 5,
      title: "social media</br>management",
      icon: <SocialIcon />,
      proyects: []
    },
    {
      id: 6,
      title: "digital & IT",
      icon: <DigitalIcon />,
      proyects: []
    }
  ]
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: sectionData.sections.find(
        section => section.id === 1
      ),
      modalToggled: false
    };
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }

  nextModal(selected) {
    var index = sectionData.sections.indexOf(selected);
    if (index + 2 > sectionData.sections.length) {
      var nextsectionName = sectionData.sections[0];
    } else {
      var nextsectionName = sectionData.sections[index + 1];
    }
    this.setState({
      selectedSection: nextsectionName
    });
  }

  prevModal(selected) {
    var index = sectionData.sections.indexOf(selected);
    if (index - 1 < 0) {
      var nextsectionName =
        sectionData.sections[sectionData.sections.length - 1];
    } else {
      var nextsectionName = sectionData.sections[index - 1];
    }
    this.setState({
      selectedSection: nextsectionName
    });
  }

  toggleModal(selected) {
    this.setState({
      modalToggled: true,
      selectedSection: selected
    });
  }

  render() {
    const { modalToggled } = this.state;
    var myself = this;
    var sectionsList = sectionData.sections.map((section, index) => (
      <li
        className="section"
        key={section.id}
        onClick={() => this.toggleModal(section)}
      >
        <h3
          dangerouslySetInnerHTML={{ __html: section.title }}
          className={myself.state.selectedSection === section ? "active" : ""}
        />
        <div className={"sectionIcon " + "section" + section.id}>
          {section.icon}
        </div>
        <p dangerouslySetInnerHTML={{ __html: section.desc }} />
      </li>
    ));
    var sectionModal = (
      <PortfolioModal
        modalToggled={this.state.modalToggled}
        section={this.state.selectedSection? this.state.selectedSection : null}
        sections={sectionData.sections}
        changeSection={this.toggleModal.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
      />
    );

    var isModalToggled = this.state.modalToggled ? sectionModal : null;
    var modalActive = this.state.modalToggled ? "modalToggled" : null;
    return (
      <div className="sectionContainer">
          {sectionModal}
        <ul className={"sectionList " + modalActive}>{sectionsList}</ul>
      </div>
    );
  }
}

export default Portfolio;
