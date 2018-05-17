import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Add from './Add';

const Form = ({ isOpen, addEvent, handleClose }) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={isOpen}
      onClose={handleClose}
    >
      <Add addEvent={addEvent} handleClose={handleClose} />
    </Dialog>
  );
};

Form.propTypes = {
  isOpen: PropTypes.bool,
  addEvent: PropTypes.func,
  handleClose: PropTypes.func,
};

export default Form;
