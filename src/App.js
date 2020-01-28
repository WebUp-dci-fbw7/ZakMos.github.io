import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './views/Main';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import Contact from './views/Contact';
import Projects from './views/Projects';
import SingleProject from './views/SingleProject';

import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            <Header/>
              <main>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path = "/Home" component = {Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/projects" component={Projects} />
                  <Route path="/projects/:id" component={SingleProject} />
                  <Route exact path="/contact" component={Contact} />
                  <Route component={NotFound} />
                </Switch>
              </main>
            <Footer />
          </Fragment>
        </Router>
    );
  }
}

export default App;