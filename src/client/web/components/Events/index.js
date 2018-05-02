import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map } from 'ramda';
import { getEvents } from '../../selectors/events';
import { getPeople } from '../../selectors/people';
import Preview from './Preview';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

const Events = ({ events, people }) => {
  return (
    <Grid>
      {map(
        ({ id, ...rest }) => <Preview key={id} people={people} {...rest} />,
        events,
      )}
    </Grid>
  );
};

Events.propTypes = {
  events: PropTypes.array,
  people: PropTypes.array,
};

const mapStateToProps = state => ({
  events: getEvents(state),
  people: getPeople(state),
});

export default connect(mapStateToProps)(Events);
