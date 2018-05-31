import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getSelectPeople } from '../selectors/people';

export const InputField = ({ id, label, field, form, classes }) => {
  const { errors, touched } = form;

  return (
    <TextField
      error={errors.label && touched.label}
      helperText={errors.label}
      id={id}
      label={label}
      className={classes.input}
      {...field}
    />
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  classes: PropTypes.object,
};

export const SelectField = ({ label, field, domainValues, classes }) => {
  return (
    <FormControl htmlFor={label} className={classes.formControl}>
      <InputLabel htmlFor="age-simple">{label}</InputLabel>
      <Select
        input={<Input id={label} />}
        value={field.value}
        name={field.name}
        onChange={field.onChange}
      >
        {domainValues.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object,
  domainValues: PropTypes.array,
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  people: getSelectPeople(state),
});

export const SelectPeople = connect(mapStateToProps)(
  ({ people, field, classes, multiple }) => {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="people">People</InputLabel>
        <Select
          multiple={multiple}
          input={<Input id="people" />}
          value={field.value === undefined ? '' : field.value}
          name={field.name}
          onChange={field.onChange}
        >
          {people.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  },
);

SelectPeople.propTypes = {
  id: PropTypes.string,
  people: PropTypes.array,
  field: PropTypes.object,
  classes: PropTypes.object,
};
