import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import AddOrEdit from './AddOrEdit';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

const EventForm = ({ accept, handleClose, classes }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        currency: 'EUR',
      }}
      onSubmit={({ values }) => {
        accept({ label: 'Nouvel Event' });
        handleClose();
      }}
      render={({ values, handleChange, handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
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
              <Button color="inherit" type="submit">
                save
              </Button>
            </Toolbar>
          </AppBar>
          <AddOrEdit handleChange={handleChange} values={values} />
        </form>
      )}
    />
  );
};

EventForm.propTypes = {
  accept: PropTypes.func,
  handleClose: PropTypes.func,
  classes: PropTypes.object,
};

export default injectSheet(styles)(EventForm);
