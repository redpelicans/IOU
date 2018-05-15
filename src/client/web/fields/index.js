import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const InputField = ({ id, label, field }) => {
  return <TextField id={id} label={label} {...field} />;
};

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.object,
};

export const SelectField = ({ id, domainValues, field }) => {
  return (
    <TextField
      select
      id={id}
      helperText="Please select your currency"
      margin="normal"
      {...field}
    >
      {domainValues.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

SelectField.propTypes = {
  id: PropTypes.string,
  domainValues: PropTypes.array,
  field: PropTypes.object,
};
