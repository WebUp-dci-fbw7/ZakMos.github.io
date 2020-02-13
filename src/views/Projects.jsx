import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import { CardDeck, Card, CardTitle, CardBody, Badge } from 'reactstrap';
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
        <div className="sections">
          <h1>Projects</h1>
        </div>
      <CardDeck>
        {this.state.projects.map((project, i) => (
          <Card key={i}>
              <CardTitle className="h3">
                {project.title}
              </CardTitle>
            <img className="card-img-top"  src={project.thumbnailUrl} alt={project.title}/>
            <CardBody>
              <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="primary" pill>{tag}</Badge>
                ))}
              </div>
              <div className="card-footer">
                <Link className="btn btn-primary" to={`/projects/${i}`}>See project</Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </CardDeck>

        <div className="card-deck">
          {this.state.projects.map((project, i) => (
            <div className="card" key={i}>
              <img className="card-img-top" width="100%"
                src={project.thumbnailUrl} 
                alt={project.title ? project.title : null}/>
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="primary" pill>{tag}</Badge>
                ))}
              </div>
                <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer">
                <Link className="btn btn-primary" to={`/projects/${i}`}>See project</Link>
            </div>
          </div>
          ))}
        </div>



      </Fragment>
      );
    }
  }
}

export default Projects;
