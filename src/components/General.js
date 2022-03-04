import React, { useState } from 'react';
import GeneralDisplay from './GeneralDisplay';

const General = () => {

  const [name, setName] = useState('Name'); 
  const [email, setEmail] = useState('Email'); 
  const [phone, setPhone] = useState('Phone'); 
  const [displayIsHtml, setDisplayIsHtml] = useState(true); 
  const [button, setButton] = useState('Edit'); 

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
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
      <GeneralDisplay 
        name={name}
        email={email}
        phone={phone}
        displayIsHtml={displayIsHtml}
        button={button}
        editButton={editButton}
        submitButton={submitButton}
        nameChange={nameChange}
        emailChange={emailChange}
        phoneChange={phoneChange}/>
    </div>
  );
};

export default General;