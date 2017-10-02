import React, { Component } from 'react';
import '../styles/joblist.css';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';

class Skills extends Component {

  render () {
      return (
          <div>
            <div>
              {this.props.id}
            </div>
          </div>
        )
   }
}

export default Skills;