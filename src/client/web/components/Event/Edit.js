import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from 'material-ui/Button';
import AddOrEdit from './AddOrEdit';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  input: {
    margin: 5,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto',
    gridTemplateAreas: "'label' 'currency' 'people'",
  },
  formControl: {
    margin: 5,
    minWidth: 120,
  },
};

const Edit = ({ event, updateEvent, handleClose, classes }) => {
  return (
    <Formik
      initialValues={{
        ...event,
      }}
      validate={values => {
        let errors = {};

        if (!values.label) {
          errors.label = 'Name is required';
        }

        return errors;
      }}
      onSubmit={values => {
        const newEvent = {
          ...values,
        };

        updateEvent(newEvent);
        handleClose();
      }}
      render={({ handleSubmit }) => (
        <Fragment>
          <DialogTitle>Edit the form</DialogTitle>
          <DialogContent>
            <AddOrEdit classes={classes} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Fragment>
      )}
    />
  );
};

Edit.propTypes = {
  event: PropTypes.object,
  updateEvent: PropTypes.func,
  handleClose: PropTypes.func,
  classes: PropTypes.object,
};

export default injectSheet(styles)(Edit);
