import React, {Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram,
          faTwitter,
          faFacebook,
          faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faRedo } from '@fortawesome/free-solid-svg-icons';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state;
    return (
      <>
        <div id="contact"></div>
        <div className="bg01">
          <div className="sections section-contact">
            <h1 className="main-pages-header">Contact</h1>
          </div>
          <div className="tab-pane"></div>
            <Form 
              className="container mt-1"
              action="https://formspree.io/f/xzbkndeb"
              method="POST" >
              <FormGroup className="row mb-3 mb-sm-0">
                <Col>
                  <Label for="firstName" className="mr-sm-2">First Name</Label>
                  <Input type="text" name="firstName" id="firstName" placeholder="Enter your First Name" required/>
                </Col>
                <Col>
                  <Label for="lastName" className="mr-sm-2">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" placeholder="Enter your Last Name" required/>
                </Col>
              </FormGroup>
              <FormGroup className="mt-4">
                <Label for="textArea">Comments</Label>
                  <Input type="textarea" placeholder="Your text here" id='textArea' rows="3" required/>
              </FormGroup>
              <FormGroup className="row mt-4">
                <Col>
                <Label for="Email">Email</Label>
                <Input type="email" name="_replyto" id="Email" placeholder="Enter your E-mail" required/>
                </Col>
              </FormGroup>
              <Button className="mr-2 fa-2x" color="secondary" type="reset" value="Reset the form" title="Reset the form">
                <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon>
              </Button>

                {status === "SUCCESS" ? <p>Thanks!</p> :
                 <Button className="fa-2x"color="info" type="submit" value="Send" title="Submit the Form">
                   <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                 </Button>
                }
                {status === "ERROR" && <p>Oooops! There was an error.</p>}
            </Form>

          <div className="contact-details-follow mt-3">
            <section>
              <h3 className="mb-2">Contact details</h3>
                <ul className=" list-unstyled">
                  <li>
                    <a href="https://drive.google.com/file/d/1Rtz52w9dm8ZZ1AmcPAIv6Ihb6qocm0vH/view?usp=sharing" 
                       className="list-inline-item" target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn btn-secondary">
                    <i className="fas fa-envelope pr-1"></i>
                    Download CV</button></a>
                  </li>
                  <li >
                    <a href="mailto:z.zza@hotmail.com?subject=feedback" className="list-inline-item">
                        <button type="button" className="btn btn-secondary btn-email">
                      <i className="fas fa-enveloper pr-1">
                      </i> Email</button></a>
                  </li>
                </ul>
            </section>
            <section>
              <h3 className="mb-2">Follow me</h3>
              <ul className="list-unstyled ">
                <li>
                  <a href="https://www.instagram.com/zaa_aak/" 
                     className="list-inline-item fa-3x" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a className="list-inline-item fa-3x" href="https://twitter.com/zakaria_m" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Zak.Mus" 
                    className="list-inline-item fa-3x" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/zakmos" 
                     className="list-inline-item fa-3x" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </>
    );
  }
}


