import React, { Component } from 'react';
import '../styles/App.css';
import JobList from './JobList';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          <JobList />
        </div>
      </div>
    );
  }
}

export default App;
