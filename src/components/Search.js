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
      this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${this.state.searchValue}`);
    }
  }

  updateSearch(event){
    console.log("updateSearch: "+event.target.value)
// will change to redux.
    this.setState({
      searchValue: event.target.value
    })
  }

  firstLink(){
       this.props.fetchData(`http://${default_link}jobs?offset=0&limit=1`);
    }
  prevLink(){
       this.props.fetchData(`http://${default_link}jobs?offset=5&limit=1`);
    }

  nextLink(){
     this.props.fetchData(`http://${default_link}jobs?offset=10&limit=1`);
  }
  lastLink(){
     this.props.fetchData(`http://${default_link}jobs?offset=15&limit=1`);
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
                  nextLink={this.nextLink.bind(this)}
                  firstLink={this.firstLink.bind(this)}
                  lastLink={this.lastLink.bind(this)}/>
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


