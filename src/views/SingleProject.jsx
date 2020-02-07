import React, {Component, Fragment} from 'react';
import {Badge} from 'reactstrap';
import Loader from '../components/Loader';
import ProjectsClient from "../modules/projectsClient";
const client = new ProjectsClient();

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    }
  }

  updatePage = () => {
    const id = this.props.match.params.id;

    client.getProject(id)
    .then(project => {
      document.title = `${project.title} | Zakaria's website`;
      if(this._isMounted) {
        this.setState({
          project: project
        })
      }

    })
  }

  componentDidMount(){
    this.updatePage()
      this._isMounted = true
  }

  componentDidUpdate() {
    this.updatePage()
  }
  componentWillUnmount () {
    this._isMounted = false
  }

  render(){
    const {project} = this.state;
    if(Object.keys(project).length ===0){
      return (<Loader />)
    } else {
      return (
      <Fragment>
        <h2>{project.title}</h2>
        <img className="img-fluid" src={project.imageUrl} alt={project.title}/>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => (
            <Badge key={tag} color="primary" pill>{tag}</Badge>
          ))}
        </div>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">See it online!</a>
      </Fragment>
      )
    }
  }
}
export default SingleProject;



// WEBPACK FOOTER //
// src/views/SingleProject.jsx
