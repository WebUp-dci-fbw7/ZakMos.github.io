import React from 'react';
// import { BsPatchCheckFill } from 'react-icons/bs';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiSass } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { DiJqueryLogo } from 'react-icons/di';
import { BsWordpress } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience_details">
              <DiSass className="experience_details-icon" />
              <div>
                <h4>CSS/ SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoLogoJavascript className="experience_details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillBootstrapFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <DiReact className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiJqueryLogo className="experience_details-icon" />
              <div>
                <h4>Jquery</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsWordpress className="experience_details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backtend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <DiNodejsSmall className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiJava className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMysql className="experience_details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaPhp className="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience