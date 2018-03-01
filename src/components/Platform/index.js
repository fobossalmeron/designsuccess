import React, { Component } from "react";
import SolutionModal from "./solutionModal";
import ReactSVG from 'react-svg';
import { withPrefix } from 'gatsby-link';

const platformData = {
  "solutions": [
    {
      "id": 1,
      "title": "influencer management & consulting",
      "desc": "Expert team to consult and advise on influencer strategy & management.<br/>Develop, strategize, and create talent digital presence.",
      "icon": "management.svg",
    },
    {
      "id": 2,
      "title": "influencer coaching",
      "desc": "Digital & live coaching, tailored to talent with agency compliance guidance.<br/>Amplify Influencer key role with brand awareness.",
      "icon": "coaching.svg",
    },
    {
      "id": 3,
      "title": "deep demographic data",
      "desc": "Proprietary global deep data insights of specific social media followers for the talent / brand(s). Tailored follower info such as; gender, age, interest, income, location and brand affinities.",
      "icon": "demographic.svg",
    },
    {
      "id": 4,
      "title": "global influencer monitoring",
      "desc": "Proprietary monitoring of talent / influencers social media channels.<br/>Instant access to conversations from every social platform. Instant access and categorization (positive and negative) from all social media platforms.",
      "icon": "global.svg",
    },
    {
      "id": 5,
      "title": "campaign creation & content curation",
      "desc": "Consulting and/or creation of campaigns, strategy and execution – <br/>including talent / influencer content curation.",
      "icon": "campaign.svg",
    },
    {
      "id": 6,
      "title": "real-time trend trajectory",
      "desc": "Real-Time analysis of trend, topics, and audience perception.",
      "icon": "realtime.svg",
    },
    {
      "id": 7,
      "title": "posting & approval management",
      "desc": "All social media channels.<br/>Contract consulting, management, full access of all influencer postings.",
      "icon": "posting.svg",
    },
    {
      "id": 8,
      "title": "24/7 monitoring & crisis management",
      "desc": "Weekly & Monthly Analytical Insight Reporting.",
      "icon": "monitor.svg",
    },
    {
      "id": 9,
      "title": "3D Data: Direct Deep Data Intelligence",
      "desc": "a. Industry-first Social Media monitoring, alert and crisis management.<br/>b. Custom Alerts. In-real time signals automatic alerts to a potential crisis or emerging trend in your dataset.<br/>c. Detects significant or sudden changes such as shifts in volume or sentiment.",
      "icon": "deep.svg",
    }
  ]
}

class Platform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSolution: '',
      modalToggled: false,
    };
  }
  
  closeModal(){
    this.setState({
      modalToggled: false,
    });
  }

  toggleModal(selected){
    this.setState({
      modalToggled: true,
      selectedSolution: selected,
    });
  }

  render() {
    var solutionsList = platformData.solutions.map((solution, index) => (
      <li key={solution.id} onClick={() => this.toggleModal(solution)}>
        <div className="solutionNumber">{solution.id}</div> 
        <ReactSVG wrapperClassName="iconAnimated" path={withPrefix('/img/layout/iconAnimated.svg')}/>
        <ReactSVG wrapperClassName="iconStatic" path={withPrefix('/img/solutions/' + solution.icon + '')}/>
        <h3>{solution.title}</h3>
      </li>
    ));
    var solutionModal = <SolutionModal solution={this.state.selectedSolution} 
                                       solutions={platformData.solutions}
                                       changeSolution={this.toggleModal.bind(this)}
                                       closeModal={this.closeModal.bind(this)}/>
    var isModalToggled = this.state.modalToggled? solutionModal : null;
    return (
      <div className="platformContainer">
        {isModalToggled}
        <ul>
          {solutionsList}
        </ul>
      </div>
    );
  }
}

export default Platform
