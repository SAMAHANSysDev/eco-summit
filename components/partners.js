import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Item from './partner-item';

import { partnerDetails } from '../utils/data';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  }
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={1} alignItems="center" justify="center" className={classes.contentContainer}>
      {partnerDetails.map((partner) => {
        return < Item key={partner.name} name={partner.name} img={partner.img} />
      })}
    </Grid>
  );
};

export default Page;
