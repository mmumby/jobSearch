import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 200 })
    });
  }

  render() {
    return (
      <div className="header-content">
        <div className={this.state.isTop ? 'nav-header' : 'fixed-nav-header'}>
            <h1 className="header"> JobSearch </h1>
          </div>
      </div>
    );
  }
}

export default Header;