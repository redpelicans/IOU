import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styled from 'styled-components';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  // CardActions,
} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const StyledCard = styled(Card)`
  max-width: 400px;
`;

const Preview = ({ createdAt, label }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar="R"
        subheader={format(createdAt, 'DD MMMM YYYY')}
        title={label}
      />
      {/* <CardMedia image="./image.jpg" title="event" /> */}
      <CardContent>
        <Typography>Description</Typography>
      </CardContent>
      <CardContent>Members</CardContent>
    </StyledCard>
  );
};

Preview.propTypes = {
  createdAt: PropTypes.string,
  label: PropTypes.string,
};

export default Preview;
