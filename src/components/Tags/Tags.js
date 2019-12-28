import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
const Tags = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));
  
  export default function Chips() {
    const classes = Tags();
  
    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };
  
    const handleClick = () => {
      console.info('You clicked the Chip.');
    };
    return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
            <Chip label="Some Random" onDelete={handleDelete} color="primary" 
                onDelete={handleDelete}
                deleteIcon
            />
          </Grid>
          <Grid item xs={12}>
          <Chip label="Word" onDelete={handleDelete} color="primary" 
                onDelete={handleDelete}
                deleteIcon
          />
          </Grid>
          </Grid>
        </div>
      );
    }