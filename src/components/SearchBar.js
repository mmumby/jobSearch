import React, { Component } from 'react';
import '../styles/navbar.css';

class SearchBar extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: ''
    }
  }

  searchJobsKeyDown(event){
    if (event.key === 'Enter') {
      console.log("searchJobs: "+this.state.searchValue);
    }
  }

  updateSearch(event){
    console.log("updateSearch: "+event.target.value)

    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.searchJobsKeyDown.bind(this)} onChange={this.updateSearch.bind(this)} type="text" className="search-bar" placeholder="&#xf002;  Search and hit ENTER"/>
      </div>
    );
  }
}

export default SearchBar;