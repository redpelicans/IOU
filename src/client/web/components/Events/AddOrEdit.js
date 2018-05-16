import React from 'react';
import { Field } from 'formik';
import { InputField, SelectField } from '../../fields';

const AddOrEdit = () => {
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
    <div>
      <Field id="name" label="Name" name="name" component={InputField} />
      <Field
        id="currency"
        label="currency"
        name="currency"
        domainValues={currencies}
        component={SelectField}
      />
    </div>
  );
};

export default AddOrEdit;