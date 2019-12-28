import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Tags from "../../components/Tags/Tags"

const useStyles = makeStyles(theme => ({
  root: {
    width: '0%',
    maxWidth: 0,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <Tags/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <Tags/>
      </ListItem>
    </List>
  );
}
