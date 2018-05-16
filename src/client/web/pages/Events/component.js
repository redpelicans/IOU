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
  open,
  handleOpen,
  handleClose,
  classes,
  addEvent,
}) => {
  return (
    <div>
      <Form open={open} addEvent={addEvent} handleClose={handleClose} />
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
  events: PropTypes.array,
  people: PropTypes.array,
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  classes: PropTypes.object,
  addEvent: PropTypes.func,
};

export default Events;
