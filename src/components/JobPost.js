import React, { Component } from 'react';
import '../styles/joblist.css';
import ToggleDisplay from 'react-toggle-display';
import Skills from './Skills';


class JobPost extends Component {
    // react state to toggle more info
    constructor() {
    super();
    this.state = {
        show: false,
    };
  }
  handleClick(event){
    this.setState({
      show: !this.state.show
    });
  }

  render() {
      return (
            <div>
            {this.props.jobs.map((job) => (
                <div className="job-post" key={job.uuid} onClick={this.handleClick.bind(this)}>
                    {job.title}
                    {job.suggestion}
                    <ToggleDisplay if={this.state.show} key={job.uuid} tag="section">
                      <Skills id={job.uuid}/>
                    </ToggleDisplay>
                </div>
                ))}
            </div>
    );
  }
}

export default JobPost;
