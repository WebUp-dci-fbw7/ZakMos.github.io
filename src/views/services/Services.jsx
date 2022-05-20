import React from 'react'
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Website Content</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Hosting.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Logo Design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Google Business</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Google Ads.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Social Media Ads.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Front-end web development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back-end web development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Full-stack web development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>WordPress Support.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services