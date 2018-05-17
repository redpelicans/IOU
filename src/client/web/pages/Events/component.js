import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import IconButton from 'material-ui/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Preview from '../../components/Event/Preview';
import Form from '../../components/Event/Form';

const Events = ({
  events,
  people,
  isOpen,
  handleOpen,
  handleClose,
  classes,
  addEvent,
}) => {
  return (
    <div>
      <Form isOpen={isOpen} addEvent={addEvent} handleClose={handleClose} />
      <div className={classes.grid}>
        {map(
          event => <Preview key={event.id} people={people} {...event} />,
          events,
        )}
      </div>
      <IconButton
        className={classes.icon}
        color="secondary"
        style={{ fontSize: 50 }}
        onClick={handleOpen}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

export default Events;
