import React, { Component } from 'react';
import '../styles/navbar.css';
import superagent from 'superagent';
import { connect } from 'react-redux';
import actions from '../actions'

class SearchBar extends Component {
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

      superagent
        .get('http://api.dataatwork.org/v1/jobs/autocomplete?')
        .query(`contains=${this.state.searchValue}`)
        .set('Accept', 'application/json')
        .end((err, response) => {
          if (err) {
            console.log('Error:' + err)
            return
          }
          console.log('Response:' + JSON.stringify(response.body))
         this.props.fetchFeed(response.body)
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
    const feed = this.props.feed || []
    return (
      <div>
        <input onKeyDown={this.searchJobsKeyDown.bind(this)} onChange={this.updateSearch.bind(this)} type="text" className="search-bar" placeholder="&#xf002;  Search and hit ENTER"/>
      { feed.map((post, i) => {
          return (
            <div key={post.uuid}>
              <p> {post.suggestion} </p>
            </div>
          )
        })
      }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    feed: state.feed.feed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeed: (feed) => dispatch(actions.fetchFeed(feed))
  }
}





export default connect(stateToProps, dispatchToProps)(SearchBar);

