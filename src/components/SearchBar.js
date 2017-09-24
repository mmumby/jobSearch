import React, { Component } from 'react';
import '../styles/navbar.css';
import superagent from 'superagent';

class SearchBar extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
      feed: []
    }
  }

  searchJobsKeyDown(event){
    if (event.key === 'Enter') {
      console.log("searchJobs: "+this.state.searchValue);
      event.target.value = '';

      superagent
        .get('http://api.dataatwork.org/v1/jobs')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
          if (err) {
            console.log('Error:' + err)
            return
          }
          console.log('Response:' + JSON.stringify(response.body))
          this.setState({
            feed: response.body
          })
        })
    }
  }

  updateSearch(event){
    console.log("updateSearch: "+event.target.value)
// will change to redux.
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.searchJobsKeyDown.bind(this)} onChange={this.updateSearch.bind(this)} type="text" className="search-bar" placeholder="&#xf002;  Search and hit ENTER"/>
      <p> jobList </p>
      { this.state.feed.map((post, i) => {
          return (
            <div key={post.uuid}>
              <p> {post.title} </p>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default SearchBar;