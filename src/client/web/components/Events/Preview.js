import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { isEmpty, map, take } from 'ramda';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  // CardActions,
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import { getPerson } from '../../selectors/people';

const initials = ({ firstname, lastname }) =>
  `${take(1, firstname)} ${take(1, lastname)}`;

const StyledCard = styled(Card)`
  margin: 10px;
`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Preview = ({ attendeeIds, createdAt, label, people }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar="R"
        subheader={format(createdAt, 'DD MMMM YYYY')}
        title={label}
      />
      <StyledCardMedia
        image={
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        title="event"
      />
      <StyledCardContent>
        {!isEmpty(people) &&
          !isEmpty(attendeeIds) &&
          map(
            id => <Avatar key={id}>{initials(getPerson(id, people))}</Avatar>,
            attendeeIds,
          )}
      </StyledCardContent>
    </StyledCard>
  );
};

Preview.propTypes = {
  attendeeIds: PropTypes.array,
  createdAt: PropTypes.string,
  label: PropTypes.string,
  people: PropTypes.array,
};

export default Preview;
