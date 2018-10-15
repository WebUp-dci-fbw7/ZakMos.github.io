import React, {Component, Fragment} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import address from '../images/address.png';
import iconContact from '../images/icon-contact.png';
import emailIcon from '../images/Email-Icon.png';


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

        <section className="container mt-5">
          <h2 className="justify-content-center d-flex">Contact details</h2>
          <div className="justify-content-center d-flex mt-5">
              <ul className="list-unstyled list-inline-item justify-content-center">
                <li className="list-inline-item justify-content-center">
                  <span><img src={address} alt="Address" width="20%" height="20%"/>Address</span>
                  <div><p>Vulkanstrase 1 12399 Berlin</p></div>
                </li>
                <li className="list-inline-item">
                  <div><img src={iconContact} alt="Phone-png" width="20%" height="20%"/>Phone</div>
                  <div><p>004900000000</p></div>
                </li>
                <li className="list-inline-item">
                  <div><img src={emailIcon} alt="Email-Icon" width="20%" height="20%"/>E-Mail</div>
                  <div><a href="mailto:z.zza@hotmail.com?subject=feedback"></a></div>
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
                <a href="https://de.linkedin.com/in/zakaria-moslim" target="_blank" rel="noopener noreferrer">
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
