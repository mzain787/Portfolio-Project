
import React from 'react';

const Experties = ({ skillName, percentage }) => {
  return (
    <div className="skill mb-4">
      <p className="skill-name text-base font-medium tracking-wide text-purple-200 mb-1">{skillName}</p>
      <div className="progress-bar w-full h-2 bg-blue-300 relative">
        <div className="progress absolute" style={{ width: `${percentage}`, backgroundColor:"grey", height:"100%"}}></div>
      </div>
    </div>
  );
};

export default Experties;


