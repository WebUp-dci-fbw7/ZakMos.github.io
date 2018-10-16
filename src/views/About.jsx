import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardDeck, CardBody, CardFooter, ListGroup, ListGroupItem } from 'reactstrap';
import experience from '../images/experience.jpg';
import training from '../images/training1.jpg';
import languages from '../images/language1.jpg';

class About extends Component {
  componentDidMount(){
    document.title = 'About | Zakaria\'s website';
  }
  render() {
    return (
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={experience} alt="Card image cap" />
          <CardBody>
            <CardTitle>Experience</CardTitle>
              <ListGroup>
                <ListGroupItem>
                  <CardTitle>IT helpdesk</CardTitle>
                  <CardSubtitle>1997-2001</CardSubtitle>
                  (Al-Zahara for Computer) / Aleppo - Syria
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Technical Coordinator</CardTitle>
                <CardSubtitle>2001-2009</CardSubtitle>
                   (Agri Sector) in The National Agricultural Dev. Co NADEC / Riyadh - Saudi Arabia
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Public Relation Officer</CardTitle>
                <CardSubtitle>2009-2011</CardSubtitle>
                    (Marketing and P.R Dept.) in The National Agricultural Dev. Co NADEC / Riyadh - Saudi Arabia
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Office General Manager</CardTitle>
                <CardSubtitle>2011-2015</CardSubtitle>
                    (External investment Dept.) in The National Agricultural Dev. Co NADEC / Riyadh - Saudi Arabia
                  </ListGroupItem>
              </ListGroup>
          </CardBody>
          <CardFooter className="text-muted">
            <small>Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImg top width="100%" height="265" src={training} alt="Card image cap" />
          <CardBody>
            <CardTitle>Training</CardTitle>
            <ListGroup>
              <ListGroupItem>
              <CardTitle>Web Development</CardTitle>
                <CardSubtitle>16 Month 2017-2019</CardSubtitle>
              DCI Digital Career Institute GmbH, Berlin
              </ListGroupItem>
              <ListGroupItem>
              <CardTitle>Professional Mentoring program (SINGA Deutschland)</CardTitle>
                <CardSubtitle>2016</CardSubtitle>
                Berlin 
              </ListGroupItem>
              <ListGroupItem>
              <CardTitle>Business Writing Skills</CardTitle>
                <CardSubtitle>2012</CardSubtitle>
                Riyadh - Saudi Arabia
              </ListGroupItem>
              <ListGroupItem>
              <CardTitle>How to deal with electronic media</CardTitle>
                <CardSubtitle>2011</CardSubtitle>
                Riyadh - Saudi Arabia
              </ListGroupItem>
              <ListGroupItem>
              <CardTitle>Presentation Skills</CardTitle>
                <CardSubtitle>2010</CardSubtitle>
                Riyadh - Saudi Arabia
              </ListGroupItem>


            </ListGroup>

          </CardBody>
          <CardFooter className="text-muted">
            <small>Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImg top width="100%" src={languages} alt="Card image cap" />
          <CardBody>
            <CardTitle>Languages</CardTitle>
              <ListGroup>
                <ListGroupItem>Kurdish: Mother Languages</ListGroupItem>
                <ListGroupItem>Arabic: Fluent</ListGroupItem>
                <ListGroupItem>English: Fluent</ListGroupItem>
                <ListGroupItem>Germany: B1</ListGroupItem>
                <ListGroupItem>Turkish: Average</ListGroupItem>
                </ListGroup>
          </CardBody>
          <CardFooter className="text-muted">
            <small>Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </CardDeck>
    );
  }
}


export default About;
