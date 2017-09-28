import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import Header from './Header';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Search />
        </div>
    );
  }
}

export default App;
