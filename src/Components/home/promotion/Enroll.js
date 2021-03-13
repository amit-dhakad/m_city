import React, { Component } from 'react';
import Fade from 'react-reveal';
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';
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

  updateForm(element) {
    const newFormData = {
      ...this.state.formData,
    };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.event.target.value;
    let validData = validate(newElement);
    newFormData[element.id] = newElement;
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormData[element.id] = newElement;
    this.setState({
      formData: newFormData,
    });
  }
  submitForm() {}

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={(event) => this.onsubmitForm(event)}>
            <div className="enroll_title">Enroll your email</div>
            <div className="enroll_input">
              <FormField
                id={'email'}
                formData={this.state.formData.email}
                change={(element) => this.updateForm(element)}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
