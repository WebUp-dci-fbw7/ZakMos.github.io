import React from 'react'
import P1 from "../../assets/zakaria.png"
import data from "../../api/data";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={P1} alt="p11" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href="www.google.com" className="btn" target="_blank">Github</a>
                  <a href="www.google.com" className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio