import React, { useState } from 'react';
import EducationDisplay from './EducationDisplay';

const Education = () => {
  const [school, setSchool] = useState('School');
  const [degree, setDegree] = useState('Degree');
  const [graduationDate, setGraduationDate] = useState('Graduation Date');
  const [displayIsHtml, setDisplayIsHtml] = useState(true);
  const [button, setButton] = useState('Edit');

  const schoolChange = (e) => {
    setSchool(e.target.value);
  };

  const degreeChange = (e) => {
    setDegree(e.target.value);
  };

  const graduationDateChange = (e) => {
    setGraduationDate(e.target.value);
  };

  const editButton = () => {
    setButton('Submit');
    setDisplayIsHtml(false);
  };
  
  const submitButton = (e) => {
    e.preventDefault();
    setButton('Edit');
    setDisplayIsHtml(true);
  };

  return (
    <div>
      <EducationDisplay 
        school={school}
        degree={degree}
        graduationDate={graduationDate}
        displayIsHtml={displayIsHtml}
        button={button}
        editButton={editButton}
        submitButton={submitButton}
        schoolChange={schoolChange}
        degreeChange={degreeChange}
        graduationDateChange={graduationDateChange}/>
    </div>
  );
};

export default Education;