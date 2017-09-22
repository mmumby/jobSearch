import React, { Component } from 'react';
import '../stylesheets/App.css';
import JobList from './JobList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Jobs</h2>
        </div>
        <p className="App-intro">
        <JobList />
        </p>
      </div>
    );
  }
}

export default App;
