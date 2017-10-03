import React, { Component } from 'react';
import '../styles/header.css';
import JobList from './JobList';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import Links from './Links';

let default_link = "api.dataatwork.org/v1/";

class Search extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
    }
  }

  searchJobsKeyDown(event){
    if (event.key === 'Enter') {
      console.log("searchJobs: "+this.state.searchValue);
      event.target.value = '';
      this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${this.state.searchValue}&offset=0&limit=20`);
    }
  }

  updateSearch(event){
    console.log("updateSearch: "+event.target.value)
// will change to redux.
    this.setState({
      searchValue: event.target.value
    })
  }

  prevLink(){
       this.props.fetchData(`http://${default_link}jobs?offset=0&limit=20`);
    }

  nextLink(){
     this.props.fetchData(`http://${default_link}jobs?offset=20&limit=20`);
  }

  render() {
    return (
        <div>
          <input onKeyDown={this.searchJobsKeyDown.bind(this)}
                onChange={this.updateSearch.bind(this)}
                type="text" className="search-bar"
                placeholder="&#xf002;  Search by job title and hit ENTER"/>
          <JobList />
          <Links prevLink={this.prevLink.bind(this)}
                  nextLink={this.nextLink.bind(this)}/>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);


