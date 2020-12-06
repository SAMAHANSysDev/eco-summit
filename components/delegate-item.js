import React from "react";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '100%',
  },
}));


const Item = ({ name, school }) => {
  const classes = useStyles();

  return (
	<Grid item className="delegateItem" style={{height: 0}}>
    <Grid container direction="row" className={classes.contentContainer}>
      <Grid item xs={4}>
        <Typography variant="body1" component="p" className="delegateItemName">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" component="p" className="delegateItemSchool">
          {school}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  );
};

// Connect the Item to gain access to `state` as a prop
export default Item;
    