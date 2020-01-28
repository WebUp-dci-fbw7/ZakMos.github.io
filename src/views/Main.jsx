import React, { Component, Fragment } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
    componentDidMount() {
        document.title = 'Main | Zakaria\'s website';
    }
    render() {
        return (        
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