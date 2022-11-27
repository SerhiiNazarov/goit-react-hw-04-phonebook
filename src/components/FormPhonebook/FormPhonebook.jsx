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

  pattern =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  schema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required(),
    number: yup.string().matches(this.pattern, 'Phone number is not valid'),
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
