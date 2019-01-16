import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import personalPic from '../images/zakaria-pic.jpg';
import { NavLink as RRNavLink } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Zakaria\'s website';
  }
  render() {
    return ( 
       <div className="center">
        <Jumbotron>
          <h2 className="display-3 text-center">
            Welcome to my Portfolio, :)
          </h2>
          <img className="personal-img rounded-circle border border-primary mt-4 mx-auto d-block" src={personalPic} alt="Zakaria's-pic" />
          <p className="lead mt-4">I have just completed a one-year Web Development course. Currently I am looking for new challenges.
          I have more than 16 years experience background in IT, Marketing, PR and office fields as Technical coordinator,
          Creativity, motivation, adopting quickly with job or new environment and learning quickly.</p>
          <hr className="my-2" />
          <p>Take a look of my profile</p>
          <p className="lead">
            <Button color="primary" exact to="/about" activeClassName="active" tag={RRNavLink}>About Me</Button>
          </p>
        </Jumbotron>
      </div>
  );
  }
}



export default Home;
