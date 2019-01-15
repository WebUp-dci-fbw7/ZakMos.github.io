import React, {Component, Fragment} from 'react';


class NotFound extends Component {
  componentDidMount(){
    document.title = 'Not Found | Zakaria\'s website';
  }
  render() {
    return (
      <Fragment>
        <div className="not-found">
          <h2>404 NOT FOUND!</h2>
          <h3>Sorry Mz. thing, but what you are looking for is not here!</h3>
        </div>
      </Fragment>
    );
  }
}


export default NotFound;
