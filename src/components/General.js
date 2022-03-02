import React, {Component} from 'react';
import GeneralDisplay from './GeneralDisplay';

class General extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
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

  nameChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  phoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    })
  }

  render() {
    const { name, email, phone, displayIsHtml, button } = this.state;

    return (
      <div>
        <GeneralDisplay 
          name={name}
          email={email}
          phone={phone}
          displayIsHtml={displayIsHtml}
          button={button}
          editButton={this.editButton}
          submitButton={this.submitButton}
          nameChange={this.nameChange}
          emailChange={this.emailChange}
          phoneChange={this.phoneChange}/>
      </div>
    );
  }
}

export default General;