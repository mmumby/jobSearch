import React, { Component } from 'react';
import '../styles/navbar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input className="search-bar" placeholder="Search..."/>
      </div>
    );
  }
}

export default SearchBar;