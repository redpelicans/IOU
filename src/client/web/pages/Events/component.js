import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Preview from '../../components/Event/Preview';
import Form from '../../components/Event/Form';
import { getEvent } from '../../selectors/events';

const Events = ({
  events,
  people,
  isOpen,
  id,
  handleOpen,
  handleClose,
  setId,
  classes,
  addEvent,
  updateEvent,
  deleteEvent,
}) => {
  return (
    <div>
      <Form
        isOpen={isOpen}
        event={getEvent(id, events)}
        addEvent={addEvent}
        updateEvent={updateEvent}
        handleClose={handleClose}
      />
      <div className={classes.grid}>
        {map(
          event => (
            <Preview
              key={event.id}
              people={people}
              deleteEvent={deleteEvent}
              {...event}
              setId={setId}
            />
          ),
          events,
        )}
      </div>
      <Button
        variant="fab"
        color="secondary"
        aria-label="add"
        className={classes.icon}
        onClick={handleOpen}
      >
        <AddIcon />
      </Button>
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
  updateEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  classes: PropTypes.object,
  id: PropTypes.string,
  setId: PropTypes.func,
};

export default Events;
