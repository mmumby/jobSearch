import React, { Component } from 'react';
import '../styles/joblist.css';
import ToggleDisplay from 'react-toggle-display';

class JobPost extends Component {
    constructor() {
    super();
    this.state = {
        show: false
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
            <div>
            {this.props.jobs.map((job) => (
                <div className="job-post" key={job.uuid} onClick={this.handleClick.bind(this)}>
                    {job.title}
                    <ToggleDisplay if={this.state.show} tag="section">
                      I am rendered in a section and removed from the DOM when if is false.
                    </ToggleDisplay>
                </div>
                ))}
            </div>
        </div>
    );
  }
}

export default JobPost;
