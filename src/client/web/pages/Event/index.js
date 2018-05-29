import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import injectSheet from 'react-jss';
import { compose, withStateHandlers } from 'recompose';
import Event from './component.js';
import { getSpendings } from '../../selectors/event';
import { getEvents } from '../../selectors/events';
import { getPeople } from '../../selectors/people';

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
    // backgroundColor: '#4054b2',
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

const mapStateToProps = state => ({
  events: getEvents(state),
  people: getPeople(state),
  spendings: getSpendings(state),
});

const mapDispatchToProps = {
  addSpending,
  updateSpending,
  deleteSpending,
};

export default compose(
  withRouter,
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
