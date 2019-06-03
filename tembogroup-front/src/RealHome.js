import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class RealHome extends Component {
  render() {
    return (
        <Router>
          {/* <NavigationBar />
          <Jumbotron /> */}
          <Layout>
            <Switch>
              <Route exact path="/home" component={About} />
              <Route path="/home/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
    );
  }
}

export default RealHome;