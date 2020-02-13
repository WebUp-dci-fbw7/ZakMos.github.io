import React, { Component, Fragment } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
    componentDidMount() {
        document.title = 'Zakaria\'s website';
    }
    render() {
        return (        
            <Fragment>
                <div className="tab-content" id="pills-tabContent">
                    < Home />
                    < About />
                    < Contact />
                    < Projects />
                </div>
            </Fragment>
        );
    }
}

export default Main;