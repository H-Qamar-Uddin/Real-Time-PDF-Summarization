import React from 'react';

const DisplayArea = ({ summary1, summary2 }) => {
  return (
    <div>
      <div>
        <h2>Model 1 Summary:</h2>
        <p>{summary1}</p>
      </div>
      <div>
        <h2>Model 2 Summary:</h2>
        <p>{summary2}</p>
      </div>
    </div>
  );
};

export default DisplayArea;
