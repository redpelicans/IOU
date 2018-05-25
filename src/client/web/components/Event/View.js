import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose, withStateHandlers } from 'recompose';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 5,
    // backgroundColor: '#4054b2',
  },
};

const View = ({ classes, tab, setTab }) => {
  return (
    <BottomNavigation
      value={tab}
      onChange={(event, value) => setTab(value)}
      // showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

View.propTypes = {
  classes: PropTypes.object,
  tab: PropTypes.number,
  setTab: PropTypes.func,
};

export default compose(
  injectSheet(styles),
  withStateHandlers(
    {
      tab: 0,
    },
    {
      setTab: () => value => ({ tab: value }),
    },
  ),
)(View);