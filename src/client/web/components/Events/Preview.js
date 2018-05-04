import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { isEmpty, map, take } from 'ramda';
import injectSheet from 'react-jss';
import Avatar from 'material-ui/Avatar';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  // CardActions,
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import { getPerson } from '../../selectors/people';

const initials = ({ firstname, lastname }) =>
  `${take(1, firstname)} ${take(1, lastname)}`;

const style = {
  avatar: {
    width: 50,
    height: 50,
  },
  card: {
    margin: 10,
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  gridList: {
    flexWrap: 'nowrap',
  },
};

const Preview = ({ attendeeIds, createdAt, label, people, classes }) => {
  const gridList = {
    flexWrap: 'nowrap',
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar="R"
        subheader={format(createdAt, 'DD MMMM YYYY')}
        title={label}
      />
      <CardMedia
        className={classes.cardMedia}
        image={
          'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        title="event"
      />
      <CardContent>
        {!isEmpty(people) &&
          !isEmpty(attendeeIds) && (
            <GridList className={classes.gridList}>
              {map(
                id => (
                  <GridListTile cols={0.5} rows={0.3} key={id}>
                    <Avatar className={classes.avatar} key={id}>
                      {initials(getPerson(id, people))}
                    </Avatar>
                  </GridListTile>
                ),
                attendeeIds,
              )}
            </GridList>
          )}
      </CardContent>
    </Card>
  );
};

Preview.propTypes = {
  attendeeIds: PropTypes.array,
  createdAt: PropTypes.string,
  label: PropTypes.string,
  people: PropTypes.array,
  classes: PropTypes.object,
};

export default injectSheet(style)(Preview);
