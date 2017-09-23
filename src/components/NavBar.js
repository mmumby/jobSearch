import React, { Component } from 'react';
import SearchBar from './SearchBar';
import '../styles/navbar.css';

class NavBar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 100 })
    });
  }

  render() {
    return (
        <div className={this.state.isTop ? 'nav-header' : 'fixed-nav-header'}>
          <div>
            <h1 className="header"> JobSearch </h1>
            <SearchBar />
          </div>
        </div>
    );
  }
}

export default NavBar;