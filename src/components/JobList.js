
import '../styles/joblist.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import JobPost from './JobPost';

const JOBS_PER_PAGE = 20;
const PAGE = 1;

const getOffsetValue = (PAGE, JOBS_PER_PAGE) => {
    return PAGE * JOBS_PER_PAGE;
}

class JobList extends Component {

    componentDidMount() {

        this.props.fetchData(`http://api.dataatwork.org/v1/jobs?offset=${getOffsetValue}&page=${PAGE}&limit=${JOBS_PER_PAGE}`);
    }

    render() {
        return (
            <div className="joblist-container">
                <JobPost jobs={this.props.jobs} />
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