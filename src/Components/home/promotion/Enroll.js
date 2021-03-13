import React, { Component } from 'react';
import Fade from 'react-reveal';
import FormField from '../../ui/formFields';
class Enroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formSuccess: '',
      formData: {
        email: {
          element: 'input',
          value: '',
          config: {
            name: 'email_input',
            type: 'email',
            placeholder: 'Enter your email',
          },
          validation: {
            required: true,
            email: true,
          },
          valid: false,
          validationMessage: '',
        },
      },
    };
  }

  submitForm() {}

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={(event) => this.onsubmitForm(event)}>
            <div className="enroll_title">Enroll your email</div>
            <div className="enroll_input">
              <FormField id={'email'} formData={this.state.formData.email} />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
