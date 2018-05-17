import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { Field } from 'formik';
import { InputField, SelectField, SelectPeople } from '../../fields';

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
    <Form className={classes.container}>
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
      <Field
        id="attendeeIds"
        name="attendeeIds"
        classes={classes}
        component={SelectPeople}
      />
    </Form>
  );
};

AddOrEdit.propTypes = {
  classes: PropTypes.object,
};

export default AddOrEdit;
