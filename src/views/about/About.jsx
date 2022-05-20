import React from 'react';
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <>
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>20+ Years working in different fields</small>
            </article>

            <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>Right now 5</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>I have graduated from the Digital Career Institute (DCI), Berlin, as a full stack Web Developer, also as a Software Developer (Java)  at ReDI School
            </p>
            <p>
              I have worked on several projects involving HTML5, CSS3, JavaScript, JQuery, React, Redux, NodeJS, express, MongoDB, MySQL, AJAX, Testing Version Control(Git). I have also studied PHP - Laravel, AWS, IOT, Phaser3, Angular and Java, Currently I am looking for new challenges as Junior Full Stack Web Developer.
            </p>
            <p >
              I have more than 16 years experience in IT, Marketing, PR and office fields as Technical coordinator.
            </p>
            <p>
              Creativity, motivation, adopting quickly with job or new environment and learning quickly.
          </p>

          <a href="#contact" className="bt"> Let's Talk</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About