import React, {Component, Fragment} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Contact extends Component {
  componentDidMount() {
    document.title= 'Contact | Zakaria\'s website';
  }
  render() {
    return (
      <Fragment>
        <Form className="container mt-5" action="https://formspree.io/z.zza@hotmail.com" method="POST" >
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
          <Button className="mr-2" color="secondary" type="reset" value="Reset the form">Reset the form</Button>
          <Button color="info" type="submit" value="Send">Submit Form</Button>
        </Form>

        <section className="container mt-5 justify-content-center">
          <h2 className="justify-content-center d-flex">Contact details</h2>
          <div className="">
              <ul className="justify-content-center d-flex mt-5">
                <li className="list-inline-item">
                <a href="https://www.google.com/maps/place/Vulkanstraße+1+10367+Berlin" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">
                <i className="fas fa-envelope pr-1"></i>
                Address</button></a>
                </li>
                <li className="list-inline-item">
                  <a href="tel:004930000000">
                  <button type="button" className="btn btn-primary">
                  <i className="fas fa-envelope pr-1"></i>
                  Phone</button></a>
                </li>
                <li className="list-inline-item">
                    <a href="mailto:z.zza@hotmail.com?subject=feedback">
                    <button type="button" className="btn btn-primary btn-email">
                    <i className="fas fa-enveloper pr-1">
                    </i> Email</button></a>
                </li>
              </ul>
            </div>
        </section>


        <section className="container  mt-5">
          <h3 className="justify-content-center d-flex">Follow me</h3>
            <div className="justify-content-center  d-flex mt-2">
            <ul className="list-unstyled list-inline-item ">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/zaa_aak/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/zakaria_m" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} size="3x"></FontAwesomeIcon></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Zak.Mus" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} size="3x"></FontAwesomeIcon></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/zakmos" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon></a>
              </li>
            </ul>
        </div>
        </section>
      </Fragment>
    );
  }
}


export default Contact;
