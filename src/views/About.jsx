import React, {Component, Fragment} from 'react';
import { Card, CardTitle, CardSubtitle, CardDeck, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartLine, faLanguage } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  render() {
    return (
      <Fragment>
        <div id="about"></div>
        <div className="sections section-about">
          <h1>About</h1>
        </div>
        <div>
          <div className="aboutMainTitle">
            <h2 className="about-title">Experience</h2>
            <FontAwesomeIcon icon={faChartLine} size="3x"></FontAwesomeIcon>
          </div>
            <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Year</th>
                <th>Position</th>
                <th>Department</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2011-2015</td>
                <td>Office GM Executive Secretary</td>
                <td>External investment Dept.</td>
                <td>The National Agricultural Dev. Co NADEC</td>
                <td>Riyadh - Saudi Arabia</td>
              </tr>
              <tr>
                <td>2009-2011</td>
                <td>Public Relation Officer</td>
                <td>Marketing and P.R Dept.</td>
                <td>The National Agricultural Dev. Co NADEC</td>
                <td>Riyadh - Saudi Arabia</td>
              </tr>
              <tr>
                <td>2001-2009</td>
                <td>Technical Co-ordinator</td>
                <td>Agricultural Dept.</td>
                <td>The National Agricultural Dev. Co NADEC</td>
                <td>Riyadh - Saudi Arabia</td>
              </tr>
              <tr>
                <td>1997-2001</td>
                <td>IT Helpdesk</td>
                <td>Maintenance Dept.</td>
                <td>Al-Zahra for Computer</td>
                <td>Aleppo - Syria</td>
              </tr>
            </tbody>
           
          </table>
        </div>
        <div className="table-2">
        <CardDeck>
          <Card>
            <CardBody>
              <ListGroup>
                <ListGroupItem>
                  <CardTitle>Office GM Executive Secretary </CardTitle>
                  <CardSubtitle>2011-2015</CardSubtitle>
                  (External investment Dept.) in The National Agricultural Dev. Co NADEC / Riyadh - Saudi Arabia
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Public Relation Officer</CardTitle>
                  <CardSubtitle>2009-2011</CardSubtitle>
                  (Marketing and P.R Dept.) in The National Agricultural Dev. Co NADEC / Riyadh - Saudi Arabia
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Technical Coordinator</CardTitle>
                  <CardSubtitle>2001-2009</CardSubtitle>
                  (Agri Sector) in The National Agricultural Dev. Co NADEC / Riyadh - Saudi Arabia
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>IT helpdesk</CardTitle>
                  <CardSubtitle>1997-2001</CardSubtitle>
                  (Al-Zahara for Computer) / Aleppo - Syria
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </CardDeck>
        </div>
        <div className="line-separator"></div>

        <div className="aboutMainTitle">
          <h2 className="about-title">Training</h2>
          <FontAwesomeIcon icon={faLightbulb} size="3x"></FontAwesomeIcon>
        </div>
        <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Year</th>
              <th>Name</th>
              <th>Organization</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019 - 3 Month's course</td>
              <td>Competence for Modern world of work</td>
              <td>MakerLab</td>
              <td>Berlin - Germany</td>
            </tr>
            <tr>
              <td>2018 - 1 year course</td>
              <td>Full Stack Web Developer</td>
              <td>DCI Digital Career Institute</td>
              <td>Berlin - Germany</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>Professional Mentoring Program</td>
              <td>SINGA Deutschland</td>
              <td>Berlin - Germany</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>Business Writing Skills</td>
              <td></td>
              <td>Riyadh - Saudi Arabia</td>
            </tr>
            <tr>
              <td>2010</td>
              <td>Presentation Skills</td>
              <td></td>
              <td>Riyadh - Saudi Arabia</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="table-2">
          <CardDeck>
            <Card>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>
                    <CardTitle>Web Development</CardTitle>
                    <CardSubtitle>1-year course 2017-2019</CardSubtitle>
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
            </Card>
          </CardDeck>
        </div>
        <div className="line-separator"></div>

        <div className="aboutMainTitle">
          <h2 className="about-title">Languages</h2>
          <FontAwesomeIcon icon={faLanguage} size="3x"></FontAwesomeIcon>
        </div>
        <div className="aboutLanguageTable">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Language</th>
                <th>Level</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>English</td>
                <td>Profficional</td>
              </tr>
              <tr>
                <td>Deutsch</td>
                <td>B1</td>
              </tr>
              <tr>
                <td>Kurdish</td>
                <td>Mother Tongue</td>
              </tr>
              <tr>
                <td>Arabic</td>
                <td>Fluency</td>
              </tr>
              <tr>
                <td>Turkish</td>
                <td>basic</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-2">
        <CardDeck>
          <Card>
            <CardBody>
              <ListGroup>
                <ListGroupItem>Germany: B1</ListGroupItem>
                <ListGroupItem>English: Fluent</ListGroupItem>
                <ListGroupItem>Kurdish: Mother Tongue</ListGroupItem>
                <ListGroupItem>Arabic: Fluent</ListGroupItem>
                <ListGroupItem>Turkish: Average</ListGroupItem>
                </ListGroup>
            </CardBody>
          </Card>
        </CardDeck>
        </div>
        <div className="line-separator"></div>
      </Fragment>
    );
  }
}


export default About;
