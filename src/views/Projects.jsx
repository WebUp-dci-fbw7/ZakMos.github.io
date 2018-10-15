import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {
  CardDeck,
  Card,
  CardTitle,
  CardBody,
  Badge
} from 'reactstrap';
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
    document.title = "Projects | Zakaria's website";

    client.getProjects().then(projects => {
      this.setState({ projects });
    });
  }
  render(){
    if(this.state.projects.length === 0){
      return <Loader />
    } else {
    return(
      <CardDeck>
        {this.state.projects.map((project, i) => (
          <Card key={i}>
            <CardBody>
              <CardTitle className="h3">
                {project.title}
              </CardTitle>
            </CardBody>
            <img width="100%" src={project.thumbnailUrl} alt={project.title}/>
            <CardBody>
              <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="primary" pill>{tag}</Badge>
                ))}
              </div>
              <Link className="btn btn-primary" to={`/projects/${i}`}>See project</Link>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
      );
    }
  }
}

export default Projects;
