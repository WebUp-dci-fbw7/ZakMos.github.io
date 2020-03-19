import React, { Component, Fragment } from 'react';
import Loader from '../components/Loader';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }
    componentDidMount() {
        document.title = 'Zakaria\'s website';
    }
    render(){
      return(
        (this.state.loading.length === 0) ? <Loader /> :
            <Fragment>
              < Home />
              < About />
              < Projects />
              < Contact />
            </Fragment>
        );
    }
}

export default Main;
