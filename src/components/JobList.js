
import '../styles/joblist.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import JobPost from './JobPost';


let default_link = "api.dataatwork.org/v1/";

class JobList extends Component {

    componentDidMount() {
        this.props.fetchData(`http://${default_link}jobs?offset=0&limit=5`)
    }


    render() {
        return (
                <div className="joblist-container">
                    <JobPost jobs={this.props.jobs}/>
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
        fetchData: (url) => dispatch(fetchJobs(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobList);