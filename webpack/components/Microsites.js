import React, { Component } from "react";
import LaunchIcon from "./../../assets/img/layout/launch.svg";

const micrositesData = {
  microsites: [
    {
      id: 1,
      title: "our founder</br>Kim Norland",
      desc:
        "Our founder, Kim Norland’s, simple yet powerful philosophies and groundbreaking processes.",
      image: "kim.jpg",
      link: "kimnorland/"
    },
    {
      id: 2,
      title: "find:out</br>market research",
      desc:
        "Our internal market research agency finds solutions where others can’t via our proprietary methodologies.",
      image: "find.jpg",
      link: "findout/"
    },
    {
      id: 3,
      title:
        "transform:now<br/>market research IT & digital innovation implementation",
      desc:
        "Next generation digital transformations with tangible and measurable impacts to help organizations lead, grow and thrive.",
      image: "transform.jpg",
      link: "transformnow/"
    },
    {
      id: 4,
      title: "case:</br>MoneyGram, $ & innovation from a-to-z",
      desc:
        "‘Innovating everything’: from brand to products to communication to even buildings – all becoming innovating experiences.",
      image: "money.jpg",
      link: "moneygram/"
    },
    {
      id: 5,
      title: "case:</br>mexicana",
      desc:
        "Transformational innovation. Redesigning an airline from a-to-z: from aircraft exterior to zestful airline food",
      image: "mexicana.jpg",
      link: "mexicana/"
    },
    {
      id: 6,
      title: "sports:direct</br>social media platform",
      desc:
        "Sports social media solution to grow, monitor, manage and protect your talent, brand & ROI",
      image: "sports.jpg",
      link: "sportsdirect/"
    },
    {
      id: 7,
      title: "say ‘hi’ to</br>artificial intelligence",
      desc:
        "We call her Aieeda (Artificial Intelligence Engagement Engine with Data Analytics) – she not only analyses deep data but interact with customers in a natural way – in multiple languages.",
      image: "aieeda.jpg",
      link: "ai/"
    }
  ]
};

class Microsites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMicrosite: "",
      modalToggled: false,
      safariReload: false
    };
  }

  componentDidMount() {
    var firstTime = setTimeout(
      function() {
        this.setState({ safariReload: true }, () => this.removeClass());
      }.bind(this),
      100
    );
  }

  removeClass() {
    console.log("entré a removeclass");
    var secondTime = setTimeout(
      function() {
        this.setState({ safariReload: false });
      }.bind(this),
      1500
    );
    console.log("sali de removeclass");
  }

  componentWillUnmount() {
    clearTimeout(firstTime);
    clearTimeout(secondTime);
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }

  nextModal(selected) {
    var index = micrositesData.microsites.indexOf(selected);
    if (index + 2 > micrositesData.microsites.length) {
      var nextMicrositeName = micrositesData.microsites[0];
    } else {
      var nextMicrositeName = micrositesData.microsites[index + 1];
    }
    this.setState({
      selectedMicrosite: nextMicrositeName
    });
  }

  prevModal(selected) {
    var index = micrositesData.microsites.indexOf(selected);
    if (index - 1 < 0) {
      var nextMicrositeName =
        micrositesData.microsites[micrositesData.microsites.length - 1];
    } else {
      var nextMicrositeName = micrositesData.microsites[index - 1];
    }
    this.setState({
      selectedMicrosite: nextMicrositeName
    });
  }

  toggleModal(selected) {
    this.setState({
      modalToggled: true,
      selectedMicrosite: selected
    });
  }

  render() {
    var micrositesList = micrositesData.microsites.map((microsite, index) => (
      <li
        className="microsite"
        id={"microsite" + microsite.id}
        key={"microsite" + microsite.id}
        onClick={() => this.toggleModal(microsite)}
      >
        <h3 dangerouslySetInnerHTML={{ __html: microsite.title }} />
        <p dangerouslySetInnerHTML={{ __html: microsite.desc }} />
        <a href={"/" + microsite.link}>
          <div className={"launchIcon launch" + microsite.id}>
            <span>click to launch</span>
            <LaunchIcon />
          </div>
        </a>
      </li>
    ));
    var micrositesImages = micrositesData.microsites.map((microsite, index) => (
      <div
        className="backgroundContainer"
        id={"micrositeBack" + microsite.id}
        key={"micrositeBack" + microsite.id}
        style={{
          backgroundImage: `url(/assets/img/microsites/${microsite.image})`
        }}
      />
    ));
    var reload = this.state.safariReload ? "special" : "";
    return (
      <ul className={"micrositesContainer " + reload}>
        {micrositesList}
        <ul className={"micrositesBackgrounds"}>{micrositesImages}</ul>
      </ul>
    );
  }
}

export default Microsites;
