import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { compose, withStateHandlers } from 'recompose';
import Event from './component.js';
import { getSpendings } from '../../selectors/spendings';
import { getEvent } from '../../selectors/events';
import { getAttendees } from '../../selectors/people';

import {
  addSpending,
  updateSpending,
  deleteSpending,
} from '../../actions/event';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 5,
  },
  card: {
    margin: 10,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
  },
  icon: {
    position: 'fixed',
    top: '90vh',
    left: '90vw',
  },
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  },
) => ({
  event: getEvent(id)(state),
  attendees: getAttendees(id)(state),
  spendings: getSpendings(id)(state),
});

const mapDispatchToProps = {
  addSpending,
  updateSpending,
  deleteSpending,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles),
  withStateHandlers(
    {
      tab: 0,
      isOpen: false,
      id: '',
    },
    {
      setTab: () => value => ({ tab: value }),
      handleOpen: () => () => ({ isOpen: true }),
      handleClose: () => () => ({ isOpen: false }),
      setId: () => id => ({ id: id, isOpen: true }),
    },
  ),
)(Event);
