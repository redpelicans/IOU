import React from 'react';
import PropTypes from 'prop-types';
import { map, find, propEq } from 'ramda';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Spending from '../../components/Spending/Preview';
import Form from '../../components/Spending/Form';
import { getSpending } from '../../selectors/spendings';

const Event = ({
  classes,
  tab,
  setTab,
  spendings,
  addSpending,
  updateSpending,
  deleteSpending,
  isOpen,
  handleClose,
  handleOpen,
  id,
  setId,
  event,
  attendees,
}) => {
  return (
    <div>
      <Form
        id={id}
        isOpen={isOpen}
        spending={getSpending(id, spendings)}
        addSpending={addSpending}
        updateSpending={updateSpending}
        handleClose={handleClose}
      />
      <BottomNavigation
        value={tab}
        onChange={(event, value) => setTab(value)}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Spending" icon={<RestoreIcon />} />
        <BottomNavigationAction label="People" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Stats" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <div className={classes.container}>
        {map(({ id, ...rest }) => {
          return (
            <Spending
              key={id}
              id={id}
              classes={classes}
              deleteSpending={deleteSpending}
              setId={setId}
              {...rest}
            />
          );
        }, spendings)}
      </div>
      <Button
        variant="fab"
        color="secondary"
        aria-label="add"
        className={classes.icon}
        onClick={() => handleOpen()}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

Event.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object,
  tab: PropTypes.number,
  setTab: PropTypes.func,
  spendings: PropTypes.array,
  addSpending: PropTypes.func,
  updateSpending: PropTypes.func,
  deleteSpending: PropTypes.func,
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  id: PropTypes.string,
  setId: PropTypes.func,
  event: PropTypes.object,
  attendees: PropTypes.array,
};

export default Event;
