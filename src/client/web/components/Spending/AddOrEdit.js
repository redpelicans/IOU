import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { Field } from 'formik';
import { InputField, SelectField } from '../../fields';

const AddOrEdit = ({ classes }) => {
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <Form className={classes.form}>
      <Field
        id="label"
        label="Name"
        name="label"
        classes={classes}
        component={InputField}
      />
      <Field
        id="currency"
        label="Currency"
        name="currency"
        domainValues={currencies}
        classes={classes}
        component={SelectField}
      />
    </Form>
  );
};

AddOrEdit.propTypes = {
  classes: PropTypes.object,
};

export default AddOrEdit;
