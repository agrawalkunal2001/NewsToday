import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='red'
          progress={progress}
        />
        <Switch /* Before using exact keyword, the links were not working. After using exact keyword, links were working but one had to reload the page after clicking a category, to show its news. This was because after selecting a category, it was not remounted on the previous catgeory. To resolve  key was used.*/>
          <Route exact path="/" /* / Specifies home page which is general category*/>
            <News changeProgress={setProgress} key="general" pageSize={9} country="in" category="General" />
          </Route>
          <Route exact path="/business">
            <News changeProgress={setProgress} key="business" pageSize={9} country="in" category="Business" />
          </Route>
          <Route exact path="/entertainment">
            <News changeProgress={setProgress} key="entertainment" pageSize={9} country="in" category="Entertainment" />
          </Route>
          <Route exact path="/health">
            <News changeProgress={setProgress} key="health" pageSize={9} country="in" category="Health" />
          </Route>
          <Route exact path="/science">
            <News changeProgress={setProgress} key="science" pageSize={9} country="in" category="Science" />
          </Route>
          <Route exact path="/sports">
            <News changeProgress={setProgress} key="sports" pageSize={9} country="in" category="Sports" />
          </Route>
          <Route exact path="/technology">
            <News changeProgress={setProgress} key="technology" pageSize={9} country="in" category="Technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

