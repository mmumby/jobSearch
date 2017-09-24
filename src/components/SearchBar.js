import React, { Component } from 'react';
import '../styles/navbar.css';

class SearchBar extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: ''
    }
  }

  searchJobs(){
    console.log("searchJobs: "+this.state.searchValue);
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
        <input onChange={this.updateSearch.bind(this)} type="text" className="search-bar" placeholder="&#xf002;  Search..."/>
        <button onClick={this.searchJobs.bind(this)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;