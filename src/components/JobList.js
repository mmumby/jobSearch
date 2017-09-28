
import '../styles/joblist.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jobsFetchData } from '../actions/index';
import AdditionalInfo from './AdditionalInfo'

class JobList extends Component {
    constructor() {
    super();
    this.state = {
      showInfo: false
    }
  }
  onClick(event){
    event.stopPropagation();
    event.preventDefault();
    this.setState({
        showInfo: !this.state.showInfo
    })
  }

    componentDidMount() {
        this.props.fetchData('http://api.dataatwork.org/v1/jobs?limit=500');
    }

    render() {
        return (
            <div className="joblist-container">
                {this.props.jobs.map((job) => (
                    <div>
                        <div className="job-post" key={job.uuid} onClick={this.onClick.bind(this)}>
                            {job.title}
                            {this.state.showInfo ? <AdditionalInfo /> : null}
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