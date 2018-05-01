import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import { getEvents } from '../../selectors/events';
import Preview from './Preview';

const Events = ({ events }) => {
  return (
    <div>
      {map(({ id, ...rest }) => <Preview key={id} {...rest} />, events)}
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.array,
};

const mapStateToProps = state => ({
  events: getEvents(state),
});

export default connect(mapStateToProps)(Events);
