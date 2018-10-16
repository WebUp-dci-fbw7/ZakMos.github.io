import React, {Component} from 'react';
import { Media, CardImg } from 'reactstrap';
import personalPic from '../images/zakaria.jpg';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Zakaria\'s website';
  }
  render() {
  return (
    <Media className="container d-flex mt-5">
      <Media left>
        <CardImg top width="100%" src={personalPic} alt="Zakaria's-pic" />
      </Media>
      <Media body className="ml-3">
        <h2 heading>
          Welcome to my Portfolio, :)
        </h2>
        <h4>
            I am studying Web Development in a one-year course. Currently I am looking for new challenges.
            I have more than 16 years experience background in IT, Marketing, PR and office fields as Technical coordinator,
            Creativity, motivation, adopting quickly with job or new environment and learning quickly.
          </h4>
        </Media>
    </Media>
  );
  }
}



export default Home;
