
import '../styles/joblist.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jobsFetchData } from '../actions/index';
import ToggleDisplay from 'react-toggle-display';

class JobList extends Component {
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

    componentDidMount() {
        this.props.fetchData('http://api.dataatwork.org/v1/jobs?limit=500');
    }

    render() {
        return (
            <div className="joblist-container">
                {this.props.jobs.map((job) => (
                    <div>
                        <div className="job-post" key={job.uuid} onClick={this.handleClick.bind(this)}>
                            {job.title}
                            <ToggleDisplay if={this.state.show} tag="section">
                              I am rendered in a section and removed from the DOM when if is false.
                            </ToggleDisplay>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(jobsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);