import React, { Component } from 'react';
import SearchBar from './SearchBar';
import '../styles/navbar.css';

class NavBar extends Component {
  // state = {
  //   isTop: true,
  // };

  // componentDidMount() {
  //   document.addEventListener('scroll', () => {
  //     this.setState({ isTop: window.scrollY < 8000 })
  //   });
  // }
// {this.state.isTop ? 'nav-header' : 'fixed-nav-header'}
  render() {
    return (
        <div className="nav-header">
          <div className="header-content">
            <h1 className="header"> JobSearch </h1>
            <SearchBar />
          </div>
        </div>
    );
  }
}

export default NavBar;