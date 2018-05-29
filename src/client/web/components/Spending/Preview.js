import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const Preview = ({
  classes,
  id,
  label,
  due,
  createdAt,
  deleteSpending,
  setId,
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
            <IconButton onClick={() => deleteSpending(id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        }
        subheader={format(createdAt, 'DD MMMM YYYY')}
        title={label}
      />
      <CardContent>{`${due ? due : 0} $`}</CardContent>
    </Card>
  );
};

Preview.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  due: PropTypes.number,
  deleteSpending: PropTypes.func,
  setId: PropTypes.func,
  createdAt: PropTypes.string,
};

export default Preview;
