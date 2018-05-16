import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Formik, Form } from 'formik';
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

const Add = ({ addEvent, handleClose, classes }) => {
  return (
    <Formik
      initialValues={{
        label: '',
        currency: 'EUR',
        people: [],
        img: '',
      }}
      validate={values => {
        let errors = {};

        if (!values.label) {
          errors.label = 'Required';
        }

        return errors;
      }}
      onSubmit={({ label }) => {
        const newEvent = {
          label: label,
        };

        addEvent(newEvent);
        handleClose();
      }}
      render={() => (
        <Form>
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
          <AddOrEdit />
        </Form>
      )}
    />
  );
};

Add.propTypes = {
  addEvent: PropTypes.func,
  handleClose: PropTypes.func,
  classes: PropTypes.object,
};

export default injectSheet(styles)(Add);
