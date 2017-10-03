import React, { Component } from 'react';
import '../styles/joblist.css';
import { connect } from 'react-redux';
import { fetchSkillsById } from '../actions/index';


class Skills extends Component {

    componentDidMount() {
        this.props.fetchData(`http://api.dataatwork.org/v1/jobs/${this.props.id}/related_skills`)
    }

  render () {
      return (
            <div key={this.props.id}>
              {this.props.skills.job_title}
                  <table>
                    <tr>
                      <th>Skill Required</th>
                      <th>Description</th>
                      <th>Importance</th>
                    </tr>
              {this.props.skills.skills.map((skill) => (
                <div key={skill.skill_uuid}>
                    <tr>
                      <td>{skill.skill_name}</td>
                      <td>{skill.description}</td>
                      <td>{skill.importance}/5</td>
                    </tr>
                </div>
              ))}
                </table>
            </div>
        )
   }
}
const mapStateToProps = (state) => {
    return {
        skills: state.skills
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchSkillsById(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);