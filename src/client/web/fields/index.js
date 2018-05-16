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

export const InputField = ({ id, label, field, form }) => {
  const { errors } = form;

  return (
    <TextField id={id} label={label} required={errors[field.name]} {...field} />
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
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

const mapStateToProps = state => ({
  people: getSelectPeople(state),
});

export const SelectPeople = connect(mapStateToProps)(
  ({ id, people, field }) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    return (
      <FormControl>
        <InputLabel htmlFor="select-multiple">People</InputLabel>
        <Select
          multiple
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
          {...field}
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
};
