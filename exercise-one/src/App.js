import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import './App.css'; //calling CSS here

// (dot)slash means same level; (dotdot) slash is upper level

import ArticleListing from './pages/ArticleListing';
import Article from './pages/Article';

//returns HTML and the route is which path to render????
// if route = "/article" return <Article/> etc. (this is basically what a switch statement does)

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/article/:id">
                    <Article/>
                </Route>
                <Route path="/">
                    <ArticleListing/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
