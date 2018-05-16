import React from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import injectSheet from 'react-jss';
import { getEvents } from '../../selectors/events';
import { getPeople } from '../../selectors/people';
import { addEvent } from '../../actions/events';
import Events from './component';

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

const mapStateToProps = state => ({
  events: getEvents(state),
  people: getPeople(state),
});

const mapDispatchToProps = {
  addEvent,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
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