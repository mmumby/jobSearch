import React, { Component } from 'react';
import '../styles/header.css';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';

class Header extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 510 })
    });
  }


  defaultHomeLink(event){
   this.props.fetchData('http://api.dataatwork.org/v1/jobs?limit=5');

    let pageTop = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({
        pageTop: pageTop
      });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.pageTop);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  render() {
    return (
      <div>
        <div className="header-content">
          <div className={this.state.isTop ? 'nav-header' : 'fixed-nav-header'}>
              <h1 className="header" onClick={this.defaultHomeLink.bind(this)}> JobSearch </h1>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchJobs(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
