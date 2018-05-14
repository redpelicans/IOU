import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';

export const InputField = ({ id, field }) => {
  return <TextField id={id} {...field} />;
};

InputField.propTypes = {
  id: PropTypes.string,
  field: PropTypes.object,
};

export const SelectField = ({ id, domainValues, field }) => {
  return (
    <TextField
      id={id}
      select
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
