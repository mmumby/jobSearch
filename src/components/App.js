import React, { Component } from 'react';
import '../styles/App.css';
import JobList from './JobList';
import NavBar from './NavBar';
import store from '../store';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store.configure()}>
        <div className="App">
            <NavBar />
            <JobList />
        </div>
      </Provider>
    );
  }
}

export default App;
