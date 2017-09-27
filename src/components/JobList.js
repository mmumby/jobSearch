import React from 'react';
import '../styles/joblist.css';

const JobList = (props) =>{
  const feed = props.feed || []
    return (
      <div>
        <div className="joblist-container">
          { feed.map((post, i) => {
              return (
                <div key={post.uuid}>
                  <p> {post.suggestion} </p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
}

export default JobList;