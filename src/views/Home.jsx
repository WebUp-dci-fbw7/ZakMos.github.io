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
        <Media heading>
          Zakaria's Website
        </Media>
        Welcome to my Portfolio, :)
      </Media>
    </Media>
  );
  }
}



export default Home;
