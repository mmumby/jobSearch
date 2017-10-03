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

  updateSkillSearch(event){
    console.log("updateSearch: "+event.target.value)
// will change to redux.
    this.setState({
      searchValue: event.target.value
    })
  }


// hard-coded for now, will make dynamic based on search results.
  teacherLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=teacher`);
  }
  developerLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=developer`);
  }
  engineerLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=engineer`);
  }
  artistLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=artist`);
  }
  bakerLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=baker`);
  }
  htmlLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=html`);
  }
  cssLink(){
   this.props.fetchData(`http://api.dataatwork.org/v1/skills/autocomplete?contains=css`);
  }

  render() {
    return (
        <div className="additional-info">
          <input onKeyDown={this.searchSkillsKeyDown.bind(this)}
                onChange={this.updateSkillSearch.bind(this)}
                type="text" className="skill-search-bar"
                placeholder="&#xf002;  Search by Skill and hit ENTER"/>
            <div>
              <h3>Popular Searches</h3>
              <p onClick={this.teacherLink.bind(this)}>Teacher</p>
              <p onClick={this.developerLink.bind(this)}>Developer</p>
              <p onClick={this.engineerLink.bind(this)}>Engineer</p>
              <p onClick={this.artistLink.bind(this)}>Artist</p>
              <p onClick={this.bakerLink.bind(this)}>Baker</p>
              <p onClick={this.htmlLink.bind(this)}>HTML</p>
              <p onClick={this.cssLink.bind(this)}>CSS</p>
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

