import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import { Form } from 'formik';
import { Field, FieldArray } from 'formik';
import Button from '@material-ui/core/Button';
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
      <Field
        id="amount"
        label="Amount"
        name="amount"
        classes={classes}
        component={InputField}
      />
      <FieldArray
        name="attendees"
        render={arrayHelper => {
          const { attendees } = arrayHelper.form.values;

          return (
            <div>
              <Button onClick={() => arrayHelper.push({})}>
                Add an attendee
              </Button>
              {attendees &&
                attendees.map((attendee, index) => (
                  <div key={index}>
                    <Field
                      label={`${index + 1}) Name`}
                      name={`attendees.${index}.personId`}
                      classes={classes}
                      multiple={false}
                      component={SelectPeople}
                    />
                    <Field
                      label={`Key`}
                      name={`attendees.${index}.key`}
                      classes={classes}
                      component={InputField}
                    />
                    <Button onClick={() => arrayHelper.remove(index)}>X</Button>
                  </div>
                ))}
            </div>
          );
        }}
      />
    </Form>
  );
};

AddOrEdit.propTypes = {
  classes: PropTypes.object,
};

export default AddOrEdit;
