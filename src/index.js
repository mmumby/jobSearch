import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';


import App from './components/App';
import JobList from './components/JobList';
import Skills from './components/Skills';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={JobList}></IndexRoute>
            <Route path="/view/:jobId" component={Skills}></Route>
          </Route>
        </Router>
    )

ReactDOM.render(router, document.getElementById('root'));




