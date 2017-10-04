import React, { Component } from 'react';
import '../styles/joblist.css';
import Skills from './Skills';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';


class JobPost extends Component {
  constructor() {
  super();

  this.state = {
    modalIsOpen: false
  };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

 similarJobs(){
     this.props.fetchJobs(`http://api.dataatwork.org/v1/jobs/${this.props.jobs.uuid}/related_jobs`);
  }


  render() {
      return (
        <div>
          <div>
              <div>
              {this.props.jobs.map((job) => (
                  <div className="job-post" key={job.uuid} onClick={this.openModal.bind(this)}>
                      {job.title}
                      {job.suggestion}
                      <Modal isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            className="modal"
                            contentLabel="Example Modal"
                            key={job.uuid}>
                        <button className="closeButton" onClick={this.closeModal.bind(this)}>
                         <i className="fa fa-2x fa-times-circle" aria-hidden="true"></i>
                        </button>
                        <div><a onClick={this.similarJobs.bind(this)}><i className="fa fa-search"></i>See Similar job listings!</a></div>
                        <Skills id={job.uuid}/>
                      </Modal>
                  </div>
                  ))}
              </div>
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
        fetchJobs: (url) => dispatch(fetchJobs(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobPost);
