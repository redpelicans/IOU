import React from 'react';
import { Field } from 'formik';
import { InputField, SelectField, SelectPeople } from '../../fields';

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
      <Field id="label" label="Name" name="label" component={InputField} />
      <Field id="people" name="people" component={SelectPeople} />
      {/* <Field
        id="currency"
        label="currency"
        name="currency"
        domainValues={currencies}
        component={SelectField}
      /> */}
    </div>
  );
};

export default AddOrEdit;
