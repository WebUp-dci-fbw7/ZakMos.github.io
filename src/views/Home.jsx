import React, {Component, Fragment} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import personalPic from '../images/zakaria-pic.jpg';
import { NavLink as RRNavLink } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Zakaria\'s website';
  }
  render() {
    return (
      <Fragment>
      <div id="home"></div>
        <Jumbotron>
          <h2 className="display-3 text-center">
            Welcome to my Portfolio, :)
          </h2>
          <img className="personal-img rounded-circle border border-primary mt-4 mx-auto d-block" src={personalPic} alt="Zakaria's-pic" />
          <p className="lead mt-4">I have graduated from Digital Career Institute (DCI) Berlin, as Web Developer.</p>
          <p className="lead mt-1">I have worked on several projects involving HTML5, CSS3, AJAX, Git, Version Control, Testing, JavaScript, Jquery, React, Redux, NodeJS, MongoDB, MySQL, Express, and I have studied phaser3, PHP, PHP-Laravel, and Angular, Currently I am looking for new challenges as Junior Full Stack Web Developer.
          </p>
          <p className="lead mt-1">
          I have more than 16 years experience in IT, Marketing, PR and office fields as Technical coordinator.</p>
          <p className="lead mt-1">
          Creativity, motivation, adopting quickly with job or new environment and learning quickly.</p>
          <hr className="my-2" />
          <p>Take a look of my profile</p>
          <p className="lead">
            <Button color="primary" exact to="/about" activeClassName="active" tag={RRNavLink}>About Me</Button>
          </p>
        </Jumbotron>
      </Fragment>
  );
  }
}



export default Home;
