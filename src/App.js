import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Page from './view/page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id='root'>
          <Route path="/" component={Page} />
        </div>
      </Router>
    );
  }
}

export default App;
