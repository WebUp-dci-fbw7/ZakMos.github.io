import projects from '../projects.json';


class ProjectsClient {
  getProjects(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(projects);
      }, 50)
    });
  }

  getProject(id){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(projects[id]);
      }, 50)
    });
  }
}

export default ProjectsClient;
