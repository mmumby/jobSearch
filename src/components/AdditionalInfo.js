import React, { Component } from 'react';
import '../styles/additionalInfo.css';

class AdditionalInfo extends Component {

  render() {
    return (
        <div className="additional-info">
          <input type="text" className="skill-search-bar" placeholder="&#xf002;  Search by Skill and hit ENTER"/>
            <div>
              <h3>Popular Searches</h3>
              <p> text text text text text text text text text text text </p>
            </div>
        </div>
    );
  }
}

export default AdditionalInfo;
