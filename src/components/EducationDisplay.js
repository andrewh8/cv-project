import React, {Component} from 'react';
import '../styles/componentStyle.css';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { school, 
            degree,
            graduationDate, 
            displayIsHtml, 
            button, 
            editButton, 
            submitButton, 
            schoolChange, 
            degreeChange,
            graduationDateChange 
        } = this.props;

    return displayIsHtml ? (
        <div className='component'>
            <div className='largeFont'>Education</div>
            <div>{school}</div>
            <div>{degree}</div>
            <div>{graduationDate}</div>
            <button onClick={editButton}>{button}</button>
        </div>
    ) : (
        <form className='component' onSubmit={submitButton}>
            <label htmlFor="schoolInput">School: </label>
            <input 
                onChange={schoolChange}
                value={school}
                type="text"
                id="schoolInput"></input>
            <label htmlFor="degreeInput">Degree: </label>
            <input 
                onChange={degreeChange}
                value={degree}
                type="text"
                id="degreeInput"></input>
            <label htmlFor="graduationDateInput">Graduation Date: </label>
            <input 
                onChange={graduationDateChange}
                value={graduationDate}
                type="text"
                id="graduationDateInput"></input>
            <button type='submit'>{button}</button>
        </form>
    )
  }
}

export default EducationDisplay;