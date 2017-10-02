import React, { Component } from 'react';
import '../styles/joblist.css';
import Skills from './Skills';
import Modal from 'react-modal';


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

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
      return (
        <div>
            <div>
            {this.props.jobs.map((job) => (
                <div className="job-post" key={job.uuid} onClick={this.openModal.bind(this)}>
                    {job.title}
                    {job.suggestion}
                    <Modal isOpen={this.state.modalIsOpen.bind(this)}
                          onRequestClose={this.closeModal.bind(this)}
                          className="modal"
                          contentLabel="Additional information">
                      <Skills id={job.uuid}/>
                      <button className="closeButton" onClick={this.closeModal.bind(this)}>
                       <i className="fa fa-3x fa-times-circle" aria-hidden="true"></i>
                      </button>
                    </Modal>
                </div>
                ))}
            </div>
          </div>
    );
  }
}

export default JobPost;
