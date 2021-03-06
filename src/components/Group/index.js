import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AddUserDialog from '../../containers/AddUserDialog';
import User from '../User';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  title: {
    fontSize: 17,
    color: theme.palette.text.secondary,
  }
});

function Group({ classes, groupId, users, name, onUserClick, onAddUserClicked, playlist }) {
  const userItems = users.map((user, index) => (
    <User name={user.name} index={index} key={index} onClick={onUserClick(user.id)} />
  ));

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.title}> Group {name} </div>
        <List>
          { userItems }
        </List>
      </CardContent>
      <CardActions>
        <Button color="primary" dense onClick={onAddUserClicked(groupId)}>Add User</Button>
        { playlist && 
          <Button color="primary" label="See Playlist" href={playlist} target="_blank" dense>
            See Playlist
          </Button>
        }
      </CardActions>
      <AddUserDialog groupId={groupId} />
    </Card>
  )
}

Group.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }),
  name: PropTypes.number,
  users: PropTypes.arrayOf(PropTypes.string),
  onUserClick: PropTypes.func,
  onAddUserClicked: PropTypes.func,
  isAddUserActive: PropTypes.bool,
  playlist: PropTypes.string,
};

export default withStyles(styles)(Group);