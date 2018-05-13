import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers } from 'recompose';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import Dialog, { withMobileDialog } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    width: 200,
  },
};

const EventForm = ({
  open,
  handleClose,
  fullScreen,
  currency,
  handleChange,
  classes,
}) => {
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
    <Formik
      // initialValues={}
      // onSubmit={() => addEvent()}
      render={() => (
        <Dialog fullScreen open={open} onClose={handleClose}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Close"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Add New Event
              </Typography>
              <Button color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            // value={this.state.name}
            onChange={value => console.log('value', value)}
            margin="normal"
          />
          <TextField
            id="select-currency"
            select
            label="Select"
            className={classes.textField}
            value={currency}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Dialog>
      )}
    />
  );
};

EventForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  fullScreen: PropTypes.bool,
  currency: PropTypes.string,
  handleChange: PropTypes.func,
  classes: PropTypes.object,
};

export default compose(
  withMobileDialog(),
  injectSheet(styles),
  withStateHandlers(
    {
      currency: '',
    },
    {
      handleChange: name => event => ({ currency: event.target.value }),
    },
  ),
)(EventForm);
