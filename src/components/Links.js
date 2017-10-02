import React, { Component } from 'react';
import '../styles/joblist.css';

class Links extends Component {
  render () {
      return (
        <div>
          <div className="pagination-links">
              <a onClick={this.props.prevLink}><i className="fa fa-2x fa-angle-double-left"></i></a>
              <a id="left" onClick={this.props.nextLink}><i className="fa fa-2x fa-angle-double-right"></i></a>
          </div>
        </div>
        )
   }
}

export default Links;