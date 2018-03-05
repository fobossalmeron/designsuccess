import React from 'react';
import Link from 'gatsby-link';
import { withPrefix } from 'gatsby-link';
import ReactSVG from 'react-svg';
import ReactPlayer from 'react-player';
import Platform from '../components/Platform/index';
import ContactForm from '../components/Form/index';


const IndexPage = () => (
  <div className="bodyLimit">
    <section id="home">
      <h1>sports:direct</h1>
      <ReactSVG wrapperClassName="mainLogo" path={withPrefix('/svg/layout/sportsDirect.svg')}/>
      <h2>invest, increase & protect your brand & investment</h2>
      <div className="homeText">
        <p>the world’s <b>first sports talent social media data
          & management platform</b> that:</p>
        <ul>
          <li>grow</li>
          <li>manage</li>
          <li>coach</li>
          <li>monitor 24/7/365</li>
          <li>mine big data</li>
          <li>in-depth report</li>
          <li>…and crisis manage if needed</li>
        </ul>
        <p>all while:</p>
        <ul>
          <li>eliminating or reducing risk</li>
          <li>protecting your investment & brand</li>
          <li>tracking and protecting ROI</li>
        </ul>
      </div>
    </section>
    <section id="video">
    <div className="videoWrapper">
      <div className="videoOverlay"></div>
      <ReactPlayer url="http://vimeo.com/256668685" playsinline={true}/>
    </div>
    </section>
    <section id="background">
     <h2>the <br/>background</h2>
     <div className="backgroundText">
     <p>Social Media is important for brands!</p>
     <p><b>BUT</b> Brands, athletes, agents, clubs, and
      federations face new and increased
      challenges or dangers because of <b>social
      media speed</b> and <b>transparency</b>. <b>What is the
      true ROI, Who is really following on Social
      Media. And how to protect investments.</b></p>
      </div>
    </section>
    <section id="platform">
      <h2>#1 propietary<br/>platform & solution</h2>
      <p>9 cutting-edge tools</p>
      <Platform />
    </section>
    <section id="deepdata">
      <h2>deep data demand. done.</h2>
      <div className="firstColumned">
        <p>Get deep data that no other can deliver with 3D Data Platform: Direct Deep Data</p>
        <p>sports:direct’s proprietary and patent-pending 3D Data Platform provide unprecedented deep consumer, engagement and ROI data.</p>
        <p>End-to-end measurements and capabilities measure Billions of Data Points and 100+ Million Physical Locations Worldwide.</p>
      </div>
      <div className="secondColumned">
        <span>engagement</span>
        <span>event visit</span>
        <span>deep engagement</span>
        <span>physical store visit</span>
        <span>purchase intent</span>
        <span>purchase channel preference</span>
        <ReactSVG wrapperClassName="diagramAnimated" path={withPrefix('/svg/layout/diagramAnimated.svg')}/>
      </div>
      <div className="thirdColumned">
        <h2>tracks:</h2>
        <span>1 billion data points<br/>
              100+ million locations</span>
        <div className="socialInteraction">
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/facebook.svg')}/>
        <ReactSVG wrapperClassName="socialIcon deepOnly" path={withPrefix('/svg/social/youtube.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/instagram.svg')}/>
        <ReactSVG wrapperClassName="socialIcon deepOnly" path={withPrefix('/svg/social/linkedin.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/twitter.svg')}/>
        <p>*: Deep engagement data only</p>
        </div>
      </div>
    </section>
    <section id="tracking_platform">
      <h2>3D Data: Deep Tracking Platform</h2>
    </section>
    <section id="benefits">
    <h2>benefits</h2>
    <div className="objectContainer">
      <div className="object">
        <h3>brands</h3>
        <div className="objectVideo">
          <ReactPlayer url={withPrefix('/video/soccer.mp4')} playsinline loop playing/>
        </div>
        <ul> 
          <li>Brand & Athlete<br/>(Influencer/Talent) fit</li>
          <li>Athlete Social Media index</li>
          <li>In-depth Athlete follower demographic data</li>
          <li>‘Protecting’ brands investment in Athlete</li>
          <li>Protecting brand name</li>
          <li>Negotiation tool for Athlete sponsorships</li>
          <li>Managing Athletes digital content<br/>– incl. scheduling</li>
          <li>Social Media training of Athlete</li>
          <li>Exclusive Consumer Data</li>
          <li>Social Media crisis management</li>
          <li>24/7 positive / negative monitoring</li>
          <li>Illuminate or diminish risk</li>
        </ul>
      </div>
      <div className="object">
        <h3>athletes</h3>
        <div className="objectVideo">
          <ReactPlayer url={withPrefix('/video/sneaker.mp4')} playsinline loop playing/>
        </div>
        <ul>
          <li>Increased brand building</li>
          <li>Personal social media training</li>
          <li>More time / focus on training, game etc.</li>
        </ul>
      </div>
      <div className="object">
        <h3>clubs</h3>
        <div className="objectVideo">
          <ReactPlayer url={withPrefix('/video/tshirt.mp4')} playsinline loop playing/>
        </div>
        <ul>
          <li>Brand & Athlete<br/> (Influencer/Talent) fit</li>
          <li>Athlete Social Media index</li>
          <li>In-depth Athlete follower demographic data</li>
          <li>ROI of Athlete engagement; current and projected</li>
          <li>In-depth Athlete follower demographic data</li>
          <li>‘Protecting’ agents/clubs investment in Athlete</li>
          <li>Protecting club name</li>
          <li>Negotiation tool for Athlete sponsorships</li>
          <li>Social Media crisis management</li>
          <li>24/7 positive / negative monitoring</li>
          <li>Illuminate or diminish risk</li>
        </ul>
      </div>
      <div className="object">
        <h3>agents</h3>
        <div className="objectVideo">
          <ReactPlayer url={withPrefix('/video/briefcase.mp4')} playsinline loop playing/>
        </div>
        <ul>
          <li>Brand & Athlete <br/> (Influencer/Talent) fit</li>
          <li>Athlete Social Media index</li>
          <li>In-depth Athlete follower demographic data</li>
          <li>ROI of Athlete engagement; current and projected</li>
          <li>In-depth Athlete follower demographic data</li>
          <li>‘Protecting’ agents/clubs investment in Athlete</li>
          <li>Protecting club name</li>
          <li>Negotiation tool for Athlete sponsorships</li>
          <li>Social Media crisis management</li>
          <li>24/7 positive / negative monitoring</li>
          <li>Illuminate or diminish risk</li>
        </ul>
      </div>
    </div>
    </section>
    <section id="trustedby">
      <div className="firstColumned">
        <div>
          <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat.<span>“</span></p>
          <label>-Jack Albert. CEO “globalinc”</label>
        </div>
        <div>
          <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat.<span>“</span></p>
          <label>-Jack Albert. CEO “globalinc”</label>
        </div>
      </div>
      <div className="trustedGrid">
      <ReactSVG path={withPrefix('/svg/clients/clientCocaCola.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientPepsico.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientChanel.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientBoss.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientPrada.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientKraft.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientSanofi.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientPfizer.svg')}/>
      <div className="trustedVideo">
        <ReactPlayer url={withPrefix('/video/intro.mp4')} playsinline loop playing/>
        <p>what our clients say about us</p>
      </div>
      <ReactSVG path={withPrefix('/svg/clients/clientNovartis.svg')}/>
      <div>
        <ReactSVG className="hasDetailBox" path={withPrefix('/svg/clients/clientNike.svg')}/>
        <p className="detailBox">
        NIKE. Insight and innovation exploration of running and female apparel. Identified winning concepts for future trends and business segments
        </p>
      </div>
      <ReactSVG path={withPrefix('/svg/clients/clientMoneyGram.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientCapitalOne.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientBaseF.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientAmigoinc.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientBMW.svg')}/>
      <ReactSVG path={withPrefix('/svg/clients/clientCampbells.svg')}/>
      </div>
    </section>
    <section id="engage">
    <ReactSVG wrapperClassName="engageLogo" path={withPrefix('/svg/layout/sportsDirect.svg')}/>
    <h2>challenges welcome</h2>
    <div className="locationContact">
      <ul>
        <li>las vegas</li>
        <li>mexico city</li> 
        <li>chicago toronto</li> 
        <li>copenhague</li> 
        <li>singapore</li>
      </ul>
    <p>universal number: +1-702 802 0200</p>
    <p>success@designsuccess.com</p>
   </div>
    <ContactForm />
   <ReactSVG wrapperClassName="locationMap" path={withPrefix('/svg/layout/locationMap.svg')}/>
    </section>
    <footer>
      <div className="socialList">
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/facebook.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/vimeo.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/youtube.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/instagram.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/linkedin.svg')}/>
        <ReactSVG wrapperClassName="socialIcon" path={withPrefix('/svg/social/twitter.svg')}/>
      </div>
      <p>© design success international ds worldwide consulting llc. all rights reserved. <a>privacy of use</a> | <a>terms & conditions</a></p>
    </footer>
  </div>
)

export default IndexPage
