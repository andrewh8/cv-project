import React from 'react';
import '../styles/componentStyle.css';

const GeneralDisplay = (props) => {

    const { name, 
            email,
            phone, 
            displayIsHtml, 
            button, 
            editButton, 
            submitButton, 
            nameChange, 
            emailChange,
            phoneChange 
        } = props;

    return displayIsHtml ? (
        <div className='component'>
            <div className='titleFont'>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <button onClick={editButton}>{button}</button>
        </div>
        ) : (
        <form className='component' onSubmit={submitButton}>
            <label htmlFor="nameInput">Name: </label>
            <input 
                onChange={nameChange}
                value={name}
                type="text"
                id="nameInput"></input>
            <label htmlFor="emailInput">Email: </label>
            <input 
                onChange={emailChange}
                value={email}
                type="text"
                id="emailInput"></input>
            <label htmlFor="phoneInput">Phone: </label>
            <input 
                onChange={phoneChange}
                value={phone}
                type="text"
                id="phoneInput"></input>
            <button type='submit'>{button}</button>
        </form>
        );
};

export default GeneralDisplay;