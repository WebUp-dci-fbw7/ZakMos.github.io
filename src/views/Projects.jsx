import React, {Component, Fragment} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInternetExplorer} from '@fortawesome/free-brands-svg-icons';
import ProjectsClient from "../modules/projectsClient";

const client = new ProjectsClient();
class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount(){
    client.getProjects().then(projects => {
      this.setState({ projects });
    });
  }
  render(){
    return(
      <Fragment>
        <div id="projects"></div>
        <div className="sections section-projects">
          <h1 className="main-pages-header">Projects</h1>
        </div>
        <Slider autoplay={3000} className="slider-wrapper" >
          {this.state.projects.map((project, i) => (
          <div key={i}
            className="slider-content">
              <img className="project-img" src={project.imageUrl} alt="Projects" />
              <div className="inner">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="dark" pill>{tag}</Badge>
              ))}
          </div>
            <div>
              <button className="btn-project">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInternetExplorer} size="2x"></FontAwesomeIcon>
                </a>
              </button>
              <button className="btn-project github">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                </a>
              </button>
            </div>
          </div>
        </div>))}
        </Slider>
      </Fragment>
      );
    }
}

export default Projects;
