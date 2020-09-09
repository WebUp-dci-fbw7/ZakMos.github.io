import React, {Component, Fragment} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram,
          faTwitterSquare,
          faFacebookSquare,
          faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faRedo } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div id="contact"></div>
        <div className="bg01">
          <div className="sections section-contact">
            <h1 className="main-pages-header">Contact</h1>
          </div>
          <div className="tab-pane"></div>
            <Form className="container mt-1" action="https://formspree.io/z.zza@hotmail.com" method="POST" >
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
              <Button className="mr-2" color="secondary" type="reset" value="Reset the form" title="Reset the form">
                <FontAwesomeIcon icon={faRedo} size="2x"></FontAwesomeIcon>
                </Button>
              <Button color="info" type="submit" value="Send" title="Submit the Form">
                <FontAwesomeIcon icon={faPaperPlane} size="2x"></FontAwesomeIcon>
              </Button>
            </Form>
          <div className="contact-details-follow mt-3">
            <section>
              <h3 className="mb-2">Contact details</h3>
                <ul className=" list-unstyled list-inline-item">
                  <li className="list-inline-item">
                    <a href="https://drive.google.com/file/d/1G6Jao6P1JNbMyaVk34aWNjpGxNui2eMd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn btn-primary">
                    <i className="fas fa-envelope pr-1"></i>
                    Download CV</button></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="mailto:z.zza@hotmail.com?subject=feedback">
                        <button type="button" className="btn btn-primary btn-email">
                      <i className="fas fa-enveloper pr-1">
                      </i> Email</button></a>
                  </li>
                </ul>
            </section>
            <section>
              <h3 className="mb-2">Follow me</h3>
              <ul className="list-unstyled list-inline-item ">
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/zaa_aak/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon>
                    </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/zakaria_m" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitterSquare} size="3x"></FontAwesomeIcon>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/Zak.Mus" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x"></FontAwesomeIcon>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/zakmos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Contact;
