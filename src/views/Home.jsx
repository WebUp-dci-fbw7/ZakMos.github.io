import React, {Component} from 'react';
import { Container } from 'reactstrap';
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
    <>
    <div className="background-home-n11">
      <Container fluid="xxl">
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
                    className="home-img"
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
                    className="home-img"
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
                    className="home-img"
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
      </Container>
     </div>

      <div className="expIconMain">
        <img className="personalImg rounded-circle puff-in-center "
             src={personalPic} alt="Zakaria's-pic" />
        <FontAwesomeIcon className="expIcon experience-icon-1" icon={faHtml5}     size="5x"></FontAwesomeIcon>
        <FontAwesomeIcon className="expIcon experience-icon-2" icon={faSass}      size="5x"></FontAwesomeIcon>
        <FontAwesomeIcon className="expIcon experience-icon-3" icon={faJsSquare}  size="5x"></FontAwesomeIcon>
        <FontAwesomeIcon className="expIcon experience-icon-4" icon={faReact}     size="5x"></FontAwesomeIcon>
        <FontAwesomeIcon className="expIcon experience-icon-5" icon={faNode}      size="5x"></FontAwesomeIcon>
        <FontAwesomeIcon className="expIcon experience-icon-6" icon={faPhp}       size="5x"></FontAwesomeIcon>
        <FontAwesomeIcon className="expIcon experience-icon-7" icon={faAngular}   size="5x"></FontAwesomeIcon>
      </div>

      <div className="home-personal">
        <div className="personaDescription background-home-n11">
          <h2>Hi, I'm Zakaria..</h2>
            <p className="lead">
              I have graduated from the Digital Career Institute (DCI), Berlin, as a full stack Web Developer.
            </p>
            <p className="lead">
              I have worked on several projects involving HTML5, CSS3, JavaScript, JQuery, React, Redux, NodeJS, express, MongoDB, MySQL, AJAX, Testing Version Control(Git). I have also studied PHP - Laravel, Phaser3, Angular ad Java, Currently I am looking for new challenges as Junior Full Stack Web Developer, and I have an evening Java course at ReDI School.
            </p>
            <p className="lead">
              I have more than 16 years experience in IT, Marketing, PR and office fields as Technical coordinator.
            </p>
            <p className="lead">
              Creativity, motivation, adopting quickly with job or new environment and learning quickly.
            </p>
        </div>
      </div>
    </>
  );
  }
}



export default Home;
