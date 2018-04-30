import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import History from '@material-ui/icons/History';

const StyledTypography = styled(Typography)`
  flex: 1;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography color="inherit" variant="title">
          IOU by RedPelicans
        </StyledTypography>
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

export default Header;
