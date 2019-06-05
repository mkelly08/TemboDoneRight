import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Init } from './Init';
// import { Contact } from './Contact';
import { Service } from './Service';
import { Corporate } from './Corporate';
import { Organization } from './Organization';
import { Movement } from './Movement';
import { Content } from './Content'
import { Partners } from './Partners'
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { BrainTrust } from './BrainTrust'
import { WhyUs } from './Whyus';
import { Careers } from './Careers';
import { Contact } from './Contact';
import { Jumbotron } from './components/Jumbotron';

class RealHome extends Component {
  render() {
    return (
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}
          <Layout>
            <Switch>
              <Route exact path="/home" component={Init} />
              <Route path="/home/service" component={ Service } />
              <Route path="/home/corporate" component={ Corporate } />
              <Route path="/home/organization" component={ Organization } />
              <Route path="/home/partners" component={ Partners } />
              <Route path="/home/movement" component={ Movement } />
              <Route path="/home/content" component={ Content } />
              <Route path="/home/about" component={ About } />
              <Route path="/home/brain" component={ BrainTrust } />
              <Route path="/home/whyus" component={ WhyUs } />
              <Route path="/home/careers" component={ Careers } />
              <Route path="/home/contact" component={ Contact } />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
    );
  }
}

export default RealHome;