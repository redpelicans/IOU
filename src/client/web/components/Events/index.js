import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withStateHandlers } from 'recompose';
import injectSheet from 'react-jss';
import { map } from 'ramda';
import IconButton from 'material-ui/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { getEvents } from '../../selectors/events';
import { getPeople } from '../../selectors/people';
import Preview from './Preview';
import EventForm from '../../forms/Event';

const style = {
  icon: {
    position: 'fixed',
    top: '90vh',
    left: '94vw',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
  },
};

const Events = ({ events, people, open, handleOpen, handleClose, classes }) => {
  return (
    <div>
      <EventForm open={open} handleClose={handleClose} />
      <div className={classes.grid}>
        {map(
          ({ id, ...rest }) => <Preview key={id} people={people} {...rest} />,
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
};

const mapStateToProps = state => ({
  events: getEvents(state),
  people: getPeople(state),
});

export default compose(
  connect(mapStateToProps),
  injectSheet(style),
  withStateHandlers(
    {
      open: false,
    },
    {
      handleOpen: () => () => ({ open: true }),
      handleClose: () => () => ({ open: false }),
    },
  ),
)(Events);
