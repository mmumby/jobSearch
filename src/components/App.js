import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import Header from './Header';
import ScrollTop from './ScrollTop';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Search />
            <ScrollTop />
        </div>
    );
  }
}

export default App;
