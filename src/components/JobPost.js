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

 // similarJobs(){
 //     this.props.fetchJobs(`http://api.dataatwork.org/v1/jobs/${this.props.job.uuid}/related_jobs`);
 //  }


  render() {
      return (
          <div>
              <div className="job-post" key={this.props.job.uuid} onClick={this.openModal.bind(this)}>
                  {this.props.job.title}
                  {this.props.job.suggestion}
                  <Modal isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="modal"
                        contentLabel="Example Modal"
                        key={this.props.job.uuid}>
                    <button className="closeButton" onClick={this.closeModal.bind(this)}>
                     <i className="fa fa-2x fa-times-circle" aria-hidden="true"></i>
                    </button>
                    <Skills id={this.props.job.uuid}/>
                  </Modal>
              </div>
          </div>
      );
    }
  }

// const mapStateToProps = (state) => {
//     return {
//         jobs: state.jobs
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchJobs: (url) => dispatch(fetchJobs(url))
//     };
// };


export default JobPost;
