import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { isEmpty, map, take } from 'ramda';
import injectSheet from 'react-jss';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import GridList, { GridListTile } from 'material-ui/GridList';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
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

const Preview = ({
  id,
  attendeeIds,
  createdAt,
  label,
  image,
  people,
  classes,
  setId,
  deleteEvent,
}) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar="R"
        action={
          <div>
            <IconButton onClick={() => setId(id)}>
              <Icon>edit_icon</Icon>
            </IconButton>
            <IconButton onClick={() => deleteEvent(id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        }
        subheader={format(createdAt, 'DD MMMM YYYY')}
        title={label}
      />
      <CardMedia className={classes.cardMedia} image={image} title="event" />
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
  id: PropTypes.string,
  attendeeIds: PropTypes.array,
  createdAt: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  people: PropTypes.array,
  classes: PropTypes.object,
  setId: PropTypes.func,
  deleteEvent: PropTypes.func,
};

export default injectSheet(style)(Preview);
