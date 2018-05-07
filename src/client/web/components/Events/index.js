import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { map } from 'ramda';
import { getEvents } from '../../selectors/events';
import { getPeople } from '../../selectors/people';
import Preview from './Preview';

const style = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
  },
};

const Events = ({ events, people, classes }) => {
  return (
    <div className={classes.grid}>
      {map(
        ({ id, ...rest }) => <Preview key={id} people={people} {...rest} />,
        events,
      )}
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.array,
  people: PropTypes.array,
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  events: getEvents(state),
  people: getPeople(state),
});

export default compose(connect(mapStateToProps), injectSheet(style))(Events);
