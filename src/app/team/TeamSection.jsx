import React from 'react';
import "./TeamSection.css"
const TeamSection = ({ t_image, t_name, t_job }) => {
  return (
    <div className="shadow-lg team-card" style={{background:"#1A1826"}}>
      <img
        src={t_image.src}
        alt={`${t_name}'s profile`}
        className="w-full h-auto team-image"
      />
      <div className="team-member-info p-4">
      <h2 className="text-orange-200 text-lg font-semibold mb-1">{t_name}</h2>
      <p className="text-sm text-purple-200 font-semibold tracking-wider">{t_job}</p>
      </div>
    </div>
  );
};

export default TeamSection;
