import React, { Component } from 'react';
import SearchBar from './SearchBar';
import '../styles/navbar.css';

class NavBar extends Component {
  render() {
    return (
        <div className="nav-header">
          <div>
            <h1> JobSearch </h1>
            <SearchBar />
          </div>
        </div>
    );
  }
}

export default NavBar;