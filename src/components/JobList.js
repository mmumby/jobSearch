
import '../styles/joblist.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jobsFetchData } from '../actions/index';

class JobList extends Component {
    componentDidMount() {
        this.props.fetchData('http://api.dataatwork.org/v1/jobs?limit=500');
    }

    render() {
        return (
            <div>
                {this.props.jobs.map((job) => (
                    <p key={job.uuid}>
                        {job.title}
                    </p>
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