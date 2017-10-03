import React from 'react';
import '../styles/skills.css';
import { connect } from 'react-redux';
import { fetchSkillsById, fetchJobs } from '../actions/index';



class Skills extends React.Component {

    componentWillMount() {
        this.props.fetchData(`http://api.dataatwork.org/v1/jobs/${this.props.id}/related_skills`);
        this.props.fetchData(`http://api.dataatwork.org/v1/skills/${this.props.id}/related_skills`);
    }

    similarJobs(){
       this.props.fetchJobs(`http://api.dataatwork.org/v1/jobs/${this.props.id}/related_jobs`);
    }

  render () {
      return (
        <div>
          <div>
            <div key={this.props.id}>
                <div className="job-title-skills">{this.props.skills.job_title}</div>

                <div><a onClick={this.similarJobs.bind(this)}><i className="fa fa-search"></i>See Similar job listings!</a></div>
                {this.props.skills.skills.map((skill) => (
                  <div key={skill.skill_uuid}>

                      <div className="table-contents">
                          <span id="importance">{skill.importance}/5</span>
                          <span id="skillname">{skill.skill_name}-</span>
                          <span>{skill.description}</span>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
   }
}
const mapStateToProps = (state) => {
    return {
        skills: state.skills,
        jobs: state.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchSkillsById(url)),
        fetchJobs: (url) => dispatch(fetchJobs(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);