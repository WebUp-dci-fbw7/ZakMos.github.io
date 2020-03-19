import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './views/Main';
import NotFound from './views/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            <Header/>
              < main className = "main-page" >
                <Switch>
                  <Route exact path="/" component={Main} />
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
