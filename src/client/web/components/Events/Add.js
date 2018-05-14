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

const EventForm = ({ accept, reject, classes }) => {
  return (
    <Formik
      initialValues={{
        name: 'Default',
        currency: '',
      }}
      onSubmit={({ values }) => accept()}
      render={({ values, handleChange }) => (
        <form>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" aria-label="Close" onClick={reject}>
                <CloseIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Add New Event
              </Typography>
              <Button
                color="inherit"
                onClick={() => accept({ label: 'Nouvel Event' })}
              >
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
  reject: PropTypes.func,
  handleChange: PropTypes.func,
  classes: PropTypes.object,
};

export default injectSheet(styles)(EventForm);
