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
              <small>3+ Years working</small>
            </article>

            <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>3+ Years working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Years working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit atque ducimus voluptate nihil cum, obcaecati architecto perferendis iure facilis assumenda accusamus maiores id, eveniet dolore corporis, commodi nobis mollitia?
          </p>

          <a href="#contact" className="bt"> Let's Talk</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About