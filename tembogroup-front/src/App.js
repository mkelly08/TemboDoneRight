import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import RealHome from './RealHome'
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          {/* <NavigationBar />
          <Jumbotron /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={RealHome} />
              {/* <Route path="/contact" component={Contact} />
              <Route component={NoMatch} /> */} 
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
