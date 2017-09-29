import React, { Component } from 'react';
import '../styles/additionalInfo.css';
import { connect } from 'react-redux';
import { fetchSkillsSearchData } from '../actions/index';

class AdditionalInfo extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
    }
  }

  searchSkillsKeyDown(event){
    if (event.key === 'Enter') {
      console.log("searchJobs: "+this.state.searchValue);
      event.target.value = '';
      this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=${this.state.searchValue}`);
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
        <div className="additional-info">
          <input onKeyDown={this.searchSkillsKeyDown.bind(this)}
                onChange={this.updateSearch.bind(this)}
                type="text" className="skill-search-bar"
                placeholder="&#xf002;  Search by Skill and hit ENTER"/>
            <div>
              <h3>Popular Searches</h3>
              <p> text text text text text text text text text text text </p>
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
        fetchData: (url) => dispatch(fetchSkillsSearchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);

