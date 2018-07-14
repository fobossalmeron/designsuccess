import React from "react";
import InnovationIcon from "svg-react-loader?name=InnovationIcon!./../../assets/img/what/innovation.svg";
import InsightIcon from "svg-react-loader?name=InsightIcon!./../../assets/img/what/insight.svg";
import BrandingIcon from "svg-react-loader?name=BrandingIcon!./../../assets/img/what/branding.svg";
import DigitalIcon from "svg-react-loader?name=DigitalIcon!./../../assets/img/what/digital.svg";
import MarketingIcon from "svg-react-loader?name=MarketingIcon!./../../assets/img/what/marketing.svg";
import SocialIcon from "svg-react-loader?name=SocialIcon!./../../assets/img/what/social.svg";

const portfolioData = {
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
            "<b>Global innovation transformation.</b></br></br>design:success was trusted to innovate for numerous MoneyGram’s global innovation projects. From insight gathering, innovation strategy, UI & IT development, brand optimization, experience creations as well as a US advertising campaign across all multiple platforms and targets, we shaped and actualized true 360 degree innovations from A-to-Z.</br></br><b>results:</b></br>Extremely high consumer satisfaction and growth in shareholder value.",
          resources: [
            {
              id: 1,
              type: "image"
            },
            {
              id: 2,
              type: "video",
              url: "https://vimeo.com/219006755"
            },
            {
              id: 3,
              type: "video",
              url: "https://vimeo.com/219010169"
            },
            {
              id: 4,
              type: "image"
            },
            {
              id: 5,
              type: "image"
            },
            {
              id: 6,
              type: "image"
            }
          ]
        },
        {
          id: 2,
          title: "1% is a lot!",
          text:
            "<b>challenge:</b></br>Increase profits in Coca-Cola’s carbonated beverage segment with fast implementable solutions.</br></br><b>solution:</b></br>We developed multiple fast implementable innovations then validated each one through our patented innovation:lab process. With rigorous analyzation we identified the right innovations to lift single serve sales. Increasing profitability by more than 1%, and 1% is a lot when you are The Coca-Cola Company.</br></br><b>result:</b></br>Sales exceeded 1% within 6 months",
          resources: [
            {
              id: 1,
              type: "image"
            },
            {
              id: 2,
              type: "image"
            },
            {
              id: 3,
              type: "image"
            },
            {
              id: 4,
              type: "image"
            },
            {
              id: 5,
              type: "image"
            },
            {
              id: 6,
              type: "image"
            }
          ]
        },
        {
          id: 3,
          title: "strategy in 40 days!",
          text: "",
          resources: []
        },
        {
          id: 4,
          title: "first innovation in 500 years",
          text: "",
          resources: []
        },
        {
          id: 5,
          title: "the sky’s the limit",
          text: "",
          resources: []
        },
        {
          id: 6,
          title: "creating a real friend",
          text: "",
          resources: []
        }
      ]
    },
    {
      id: 2,
      title: "insight & strategy",
      icon: <InsightIcon />,
      generalText:
        "<b>Deep insight is THE key to develop THE perfect strategy!</b></br>And guaranteed results!</br></br><b>design:success</b> own in-house research agency is called find:out.</br>Specialized in 1 thing: finding insight & solutions where others can’t.</br></br>Using the best methodologies and mix. Even inventing new ones which we are very proud of; <b>QualQuant™</b> and <b>innovation:lab™</b></br></br>As the world’s only innovation agency we <b>guarantee results!</b>",
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

export default portfolioData;
