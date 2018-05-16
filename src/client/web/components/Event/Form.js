import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Add from './Add';
// import EventFormEdit from '../Events/Edit';

const Form = ({ open, addEvent, handleClose }) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <Add addEvent={addEvent} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

Form.propTypes = {
  open: PropTypes.bool,
  addEvent: PropTypes.func,
  handleClose: PropTypes.func,
};

export default Form;
