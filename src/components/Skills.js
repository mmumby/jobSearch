import React, { Component } from 'react';
import '../styles/joblist.css';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';

class Skills extends Component {

  // componentWillReceiveProps(nextProps){
  //    this.props.fetchData(`http://api.dataatwork.org/v1/jobs/26bc4486dfd0f60b3bb0d8d64e001800/related_skills`);
  // }

  render () {
      return (
          <div>
            {this.props.id}
          </div>
        )
   }
}

export default Skills;