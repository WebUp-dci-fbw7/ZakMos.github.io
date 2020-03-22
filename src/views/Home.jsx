import React, {Component, Fragment} from 'react';
import personalPic from '../images/zakaria-pic.jpg';
import newProjects from '../images/NewProject.jpg';
import welcomeMsg from '../images/dci05.jpg';
import niceDay from '../images/dci03.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHtml5, faSass, faJsSquare, faReact, faNode, faPhp, faAngular } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="tab-content">
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="home-img d-block w-100"
                    src={welcomeMsg}
                    alt="Welcome Message"
                  />
                  <h2 className="welcome-message  text-focus-in">
                    Welcome to my Portfolio
                </h2>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="home-img d-block w-100"
                    src={newProjects}
                    alt="New Projects"
                  />
                </MDBView>
                <h2 className="welcome-message text-focus-in">
                  New Projects Coming Soon
                </h2>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="home-img d-block w-100"
                    src={niceDay}
                    alt="Third slide"
                  />
                </MDBView>
                <h2 className="welcome-message text-focus-in">
                  Have a nice Day...
                </h2>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
          <div className="home-personal">
            <div>
              <img className="personal-img rounded-circle border mx-auto d-block"
                    src={personalPic} alt="Zakaria's-pic" />
            </div>
            <div className="personal-description">
              <h2>Hi, I'm Zakaria..</h2>
              <p className="lead">I have graduated from the Digital Career Institute (DCI), Berlin, as a full stack Web Developer.</p>
              <p className="lead">


              I have worked on several projects involving HTML5, CSS3, JavaScript, JQuery, React, Redux, NodeJS, express, MongoDB, MySQL, AJAX, Testing Version Control(Git). I have also studied PHP - Laravel, Phaser3, Angular ad Java, Currently I am looking for new challenges as Junior Full Stack Web Developer, and I have an evening Java course at ReDI School.
              </p>
              <p className="lead">
              I have more than 16 years experience in IT, Marketing, PR and office fields as Technical coordinator.</p>
              <p className="lead">
              Creativity, motivation, adopting quickly with job or new environment and learning quickly.</p>
              <p className="lead">
              Take a look to my old <a href="http://zak.epizy.com/" target="_blank"  rel="noopener noreferrer">Portfolio</a></p>
            </div>
          </div>
          <div className="experience-icons">
            <FontAwesomeIcon className="experience-icon" icon={faHtml5} size="1x"></FontAwesomeIcon>
            <FontAwesomeIcon className="experience-icon" icon={faSass} size="1x"></FontAwesomeIcon>
            <FontAwesomeIcon className="experience-icon" icon={faJsSquare} size="1x"></FontAwesomeIcon>
            <FontAwesomeIcon className="experience-icon" icon={faReact} size="1x"></FontAwesomeIcon>
            <FontAwesomeIcon className="experience-icon" icon={faNode} size="1x"></FontAwesomeIcon>
            <FontAwesomeIcon className="experience-icon" icon={faPhp} size="1x"></FontAwesomeIcon>
            <FontAwesomeIcon className="experience-icon" icon={faAngular} size="1x"></FontAwesomeIcon>
          </div>
        </div>

      </Fragment>
  );
  }
}



export default Home;
