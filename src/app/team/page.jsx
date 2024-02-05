import React from 'react';
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading';
import TeamSection from './TeamSection';
import zain from '../../assets/images/testimonial-image.png';
import "./TeamSection.css"
const Team = () => {
  const ourteam = [
    { t_image: zain, t_name: 'Richard jonson', t_job: 'Junior Frontend Developer' },
    { t_image: zain, t_name: 'Richard jonson', t_job: 'Junior Frontend Developer' },
    { t_image: zain, t_name: 'Richard jonson', t_job: 'Junior Frontend Developer' },
    { t_image: zain, t_name: 'Richard jonson', t_job: 'Junior Frontend Developer' },
    { t_image: zain, t_name: 'Richard jonson', t_job: 'Junior Frontend Developer' },

    // Add more team members as needed
  ];

  return (
    <>
      <PageHeading pageHeading="Meet the Team" />
      <div className='wrapper component-padding our-team flex flex-wrap justify-start gap-10 roll-in-top'>
        {ourteam.map((teamMember, index) => (
          <TeamSection
            key={index} 
            t_image={teamMember.t_image}
            t_name={teamMember.t_name}
            t_job={teamMember.t_job}
          />
        ))}
      </div>
    </>
  );
};

export default Team;
