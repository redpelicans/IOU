import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import History from '@material-ui/icons/History';

const style = {
  typography: {
    flex: 1,
  },
};

const Header = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          className={classes.typography}
          color="inherit"
          variant="title"
        >
          IOU by RedPelicans
        </Typography>
        <IconButton color="inherit">
          <History />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(style)(Header);
