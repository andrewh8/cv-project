import React, {Component} from 'react';
import EducationDisplay from './EducationDisplay';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: 'School',
      degree: 'Degree',
      graduationDate: 'Graduation Date',
      displayIsHtml: true,
      button: 'Edit',
    };
  }

  editButton = () => {
    this.setState({
      button: 'Submit',
      displayIsHtml: false,
    })
  }

  submitButton = (e) => {
    e.preventDefault();
    this.setState({
      button: 'Edit',
      displayIsHtml: true,
    })
  }

  schoolChange = (e) => {
    this.setState({
      school: e.target.value,
    })
  }

  degreeChange = (e) => {
    this.setState({
      degree: e.target.value,
    })
  }

  graduationDateChange = (e) => {
    this.setState({
      graduationDate: e.target.value,
    })
  }

  render() {
    const { school, degree, graduationDate, displayIsHtml, button } = this.state;

    return (
      <div>
        <EducationDisplay 
          school={school}
          degree={degree}
          graduationDate={graduationDate}
          displayIsHtml={displayIsHtml}
          button={button}
          editButton={this.editButton}
          submitButton={this.submitButton}
          schoolChange={this.schoolChange}
          degreeChange={this.degreeChange}
          graduationDateChange={this.graduationDateChange}/>
      </div>
    );
  }
}

export default Education;