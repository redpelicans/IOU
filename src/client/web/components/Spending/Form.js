import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Add from './Add';
import Edit from './Edit';

const Form = ({
  isOpen,
  spending,
  addSpending,
  updateSpending,
  handleClose,
}) => {
  return (
    <Dialog
      fullScreen
      disableBackdropClick
      disableEscapeKeyDown
      open={isOpen}
      onClose={handleClose}
    >
      {spending ? (
        <Edit
          spending={spending}
          updateSpending={updateSpending}
          handleClose={handleClose}
        />
      ) : (
        <Add addSpending={addSpending} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

Form.propTypes = {
  isOpen: PropTypes.bool,
  addSpending: PropTypes.func,
  updateSpending: PropTypes.func,
  handleClose: PropTypes.func,
  spending: PropTypes.object,
};

export default Form;
