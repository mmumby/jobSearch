import React, { Component } from 'react';
import '../styles/additionalInfo.css';

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

  updateSkillSearch(event){
    console.log("updateSearch: "+event.target.value)
// will change to redux.
    this.setState({
      searchValue: event.target.value
    })
  }


  render() {
    return (
        <div className="additional-info">
          <input onKeyDown={this.searchSkillsKeyDown.bind(this)} onChange={this.updateSkillSearch.bind(this)} type="text" className="skill-search-bar" placeholder="&#xf002;  Search by Skill and hit ENTER"/>
            <div>
              <h3>Popular Searches</h3>
              <p> text text text text text text text text text text text </p>
            </div>
        </div>
    );
  }
}

export default AdditionalInfo;
