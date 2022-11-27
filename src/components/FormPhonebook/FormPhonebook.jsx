import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Formbook, Input, Label, Button } from './FormPhonebook.styled';

class FormPhonebook extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  schema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required(),
    number: yup.number().min(6, 'Too Short!').required(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
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
        <Formbook autoComplete="off">
          <Label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" />
            <ErrorMessage name="number" />
          </Label>
          <Button type="submit">Add contact</Button>
        </Formbook>
      </Formik>
    );
  }
}

FormPhonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormPhonebook;
