import React from "react";

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardRootContainer: {
  	height: 0,
    width: '90%',
  },
  cardRoot: {
  	height: 0,
    width: '100%',
    color: '#233e4c',
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 550
  },
  imageContent: {
  	width: '100%',
  	height: 'auto',
  	margin: 'auto'
  }
}));


const Item = ({ name, img }) => {
  const classes = useStyles();

  return (
	<Grid item sm={4} className={classes.cardRootContainer + " partnerCard"}>
      <Card className={classes.cardRoot + " partnerCard"} variant="outlined">
        <CardContent>
          <img src={"/internal/" + img} className={classes.imageContent} />
          <Typography gutterBottom variant="h6" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Connect the Item to gain access to `state` as a prop
export default Item;
    