import React, {Component} from 'react';
import { Card, CardTitle, CardSubtitle, CardDeck, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import top from '../images/up.png';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartLine, faLanguage } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  render() {
    return (
      <>
        <div id="about"></div>
        <NavLink className="top" to="/#home">
          <img
            className="animated fadeInUp"
            src={top}
            alt="Back to Top"
            title="Back to Top"/>
        </NavLink>
        <div className="sections section-about">
          <h1 className="main-pages-header">About</h1>
        </div>
        <div>
          <div className="about-main-title">
            <h2 className="about-title fa-2x">Experience  
              <FontAwesomeIcon className="about-icons" icon={faChartLine}></FontAwesomeIcon>
            </h2>
          </div>
            <table className="table about-table-experience">
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
                <td>2019-2020</td>
                <td>Arabic Teacher and Cooperation for Web-App “HSH4You”</td>
                <td>External investment Dept.</td>
                <td>SozDia Jungendhilfe,Bildung und Arbeit gGmbH</td>
                <td>Berlin - Germany</td>
              </tr>
              <tr>
                <td>2011-2015</td>
                <td>Office GM Executive Secretary</td>
                <td>Volunteer work</td>
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
        <div className="about-table-responsive">
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
        <div className="line-separator bg01"></div>
        <div className="about-main-title">
          <h2 className="about-title fa-2x">Education and Training
            <FontAwesomeIcon className="about-icons" icon={faLightbulb}></FontAwesomeIcon>
          </h2>
        </div>
        <div>
        <table className="table about-table-training">
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
              <td>2020 - 4 Month's course</td>
              <td>Software Development with Java (Intermediate)</td>
              <td>ReDI School of Digital Integration</td>
              <td>Berlin - Germany</td>
            </tr>
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
              <td>2013</td>
              <td>Business Writing Skills</td>
              <td>Mind Core</td>
              <td>Riyadh - Saudi Arabia</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>Presentation Skills</td>
              <td>Almanar Management Consultancy</td>
              <td>Riyadh - Saudi Arabia</td>
            </tr>
            <tr>
              <td>1999</td>
              <td>Diploma in Computer (Corel Draw)</td>
              <td>Republic Institute</td>
              <td>ِAleppo - Syria</td>
            </tr>
            <tr>
              <td>1998</td>
              <td>The national program for the dissemination of IT</td>
              <td>Syrian Computer Society</td>
              <td>ِAleppo - Syria</td>
            </tr>
            <tr>
              <td>1993</td>
              <td>THigh School at Aleppo Academy</td>
              <td></td>
              <td>ِAleppo - Syria</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="about-bg01 about-table-responsive">
          <CardDeck>
            <Card>
              <CardBody>
                <ListGroup>
                <ListGroupItem>
                    <CardTitle>Software Development with Java (Intermediate)</CardTitle>
                    <CardSubtitle>2020 - 4 Month's course</CardSubtitle>
                    ReDI School of Digital Integration, Berlin
                  </ListGroupItem>
                  <ListGroupItem>
                    <CardTitle>Competence for Modern world of work</CardTitle>
                    <CardSubtitle>2019 - 3 Month's course</CardSubtitle>
                    MakerLab, Berlin
                  </ListGroupItem>
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
        <div className="about-main-title">
          <h2 className="about-title fa-2x">Languages
            <FontAwesomeIcon className="about-icons" icon={faLanguage}></FontAwesomeIcon>
          </h2>
        </div>
        <div className="table about-table-language">
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
        <div className="about-table-responsive">
        <CardDeck>
          <Card>
            <CardBody>
              <ListGroup>
                <ListGroupItem>
                  <CardTitle>Germany</CardTitle>
                  <CardSubtitle>B1</CardSubtitle>
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>English</CardTitle>
                  <CardSubtitle>Fluent</CardSubtitle>
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Kurdish</CardTitle>
                  <CardSubtitle>Mother Tongue</CardSubtitle>
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Arabic</CardTitle>
                  <CardSubtitle>Fluent</CardSubtitle>
                </ListGroupItem>
                <ListGroupItem>
                  <CardTitle>Turkish</CardTitle>
                  <CardSubtitle>Average</CardSubtitle>
                </ListGroupItem>
                </ListGroup>
            </CardBody>
          </Card>
        </CardDeck>
        </div>
        <div className="line-separator"></div>
      </>
    );
  }
}

export default About;
