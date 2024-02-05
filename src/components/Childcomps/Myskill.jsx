import React from 'react';
import "../Home/Home.css"
import AosAnimation from '@/utils/AosAnimation';
export default function Myskill({ number, skill, description }) {
  return (
    <>
      <div className="myskill mb-10">
        <div className="pb-4 border-b border-gray-800 mb-10 flex flex-wrap gap-2 items-center">
          <div className="skill-no text-purple-400">{number}.</div>
          <h3 className='skill-heading font-semibold text-purple-200'>{skill}</h3>
        </div>
        <div>
          <p className='description mb-3 text-base font-medium tracking-wide'>{description}</p>
          <a href="/" className='pb-1 border-b-2 text-orange-300 border-orange-300 text-sm font-medium'>See Past Work</a>
        </div>
      </div>
    </>
  );
}
export  function MyExperience({ year, jobTitle, jobDescription }) {
  return (
    <>
      <div className="myexperience mb-10">
        <div className="pb-4 mb-5 flex items-center">
          <p className="exp-year text-xl text-orange-300 p-2 font-bold tracking-wide">{year}</p>
          <hr className='journey-line w-full'/>
        </div>
        <div className='job-details pr-4'>
          <h3 className='job-title mb-5 text-xl tracking-wide text-purple-200'>{jobTitle}</h3>
          <p className='job-description mb-3 text-sm font-medium tracking-wide text-purple-200'>{jobDescription}</p>
        </div>
      </div>
    </>
  );
}
