import React, { Component } from 'react';
import '../styles/header.css';
import { connect } from 'react-redux';
import { fetchJobsSearchData } from '../actions/index';

const JOBS_PER_PAGE = 20;
const PAGE = 1;

  const getOffsetValue = (PAGE, JOBS_PER_PAGE) => {
    return PAGE * JOBS_PER_PAGE;
}

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
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs?offset=${getOffsetValue}&page=${PAGE}&limit=${JOBS_PER_PAGE}`);

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
        fetchData: (url) => dispatch(fetchJobsSearchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
