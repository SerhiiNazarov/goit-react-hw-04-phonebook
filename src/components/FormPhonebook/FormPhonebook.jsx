import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Formfield, Input, Label, Button } from './FormPhonebook.styled';

class FormPhonebook extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  patternName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  patternNumber =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name is too Short!')
      .max(30, 'name is too Long!')
      .matches(
        this.patternName,
        'Name may contain only latin letters, apostrophe, dash and spaces.'
      )
      .required(),
    number: yup
      .string()
      .min(6, 'Phone number must be less than 6 characters')
      .matches(this.patternNumber, 'Phone number is not valid')
      .required(),
  });

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <Formfield autoComplete="off">
          <Label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: '#d95d5d' }}
            />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" />
            <ErrorMessage
              name="number"
              component="div"
              style={{ color: '#d95d5d' }}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Formfield>
      </Formik>
    );
  }
}

FormPhonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormPhonebook;
