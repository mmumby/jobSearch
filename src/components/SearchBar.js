import React, { Component } from 'react';
import '../styles/navbar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input className="search-bar" placeholder="&#xf002;  Search..."/>
      </div>
    );
  }
}

export default SearchBar;