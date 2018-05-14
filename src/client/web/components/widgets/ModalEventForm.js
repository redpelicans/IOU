import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import EventFormAdd from '../Events/Add';
// import EventFormEdit from '../Events/Edit';

const ModalEventForm = ({ open, accept, reject }) => {
  return (
    <Dialog open={open}>
      <EventFormAdd accept={accept} reject={reject} />
    </Dialog>
  );
};

ModalEventForm.propTypes = {
  open: PropTypes.bool,
  accept: PropTypes.func,
  reject: PropTypes.func,
};

export default ModalEventForm;
