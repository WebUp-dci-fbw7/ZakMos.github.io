import React, {Component, Fragment} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Badge } from 'reactstrap';
import Loader from '../components/Loader';

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
    if(this.state.projects.length === 0){
      return <Loader />
    }  else {
    return(
      <Fragment>
        <div id="projects"></div>
        <div className="sections section-projects">
          <h1>Projects</h1>
        </div>
        <Slider autoplay={3000} className="slider-wrapper" >
          {this.state.projects.map((project, i) => (
          <div 
          key={i}
          className="slider-content"
          style={{ background: `url('${project.imageUrl}') no-repeat center center` }}
          >     
              <div className="inner">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="primary" pill>{tag}</Badge>
                ))}
              </div>
                <div>                  
                  <button className="btn-project" to={`/projects/${i}`}>See project</button>
              </div>
              </div>
            </div>))}
        </Slider>
      </Fragment>
      );
    }
  }
}

export default Projects;
