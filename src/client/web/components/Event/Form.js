import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Add from './Add';
import Edit from './Edit';

const Form = ({ isOpen, event, addEvent, updateEvent, handleClose }) => {
  return (
    <Dialog
      fullScreen
      disableBackdropClick
      disableEscapeKeyDown
      open={isOpen}
      onClose={handleClose}
    >
      {event ? (
        <Edit
          event={event}
          updateEvent={updateEvent}
          handleClose={handleClose}
        />
      ) : (
        <Add addEvent={addEvent} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

Form.propTypes = {
  isOpen: PropTypes.bool,
  event: PropTypes.object,
  addEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  handleClose: PropTypes.func,
};

export default Form;
