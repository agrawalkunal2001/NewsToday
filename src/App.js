import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch /* Before using exact keyword, the links were not working. After using exact keyword, links were working but one had to reload the page after clicking a category, to show its news. This was because after selecting a category, it was not remounted on the previous catgeory. To resolve this, key was used.*/>
            <Route exact path="/" /* / Specifies home page which is general category*/>
              <News key="general" pageSize={9} country="in" category="General" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={9} country="in" category="Business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={9} country="in" category="Entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={9} country="in" category="Health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={9} country="in" category="Science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={9} country="in" category="Sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={9} country="in" category="Technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

