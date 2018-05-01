import React from 'react';
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

const Preview = () => {
  return (
    <StyledCard>
      <CardHeader avatar="R" subheader="21 Jan. 2017" title="Event" />
      <CardMedia image="" title="event" />
      <CardContent>
        <Typography>Description</Typography>
      </CardContent>
      <CardContent>Members</CardContent>
    </StyledCard>
  );
};

export default Preview;
