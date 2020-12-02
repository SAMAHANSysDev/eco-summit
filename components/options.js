import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  cardRootContainer: {
    width: '90%',
  },
  cardRoot: {
    width: '100%',
    color: theme.palette.secondary.main,
    border: 0,
    background: '#4eb2bf',
    '&:hover': {
      background: '#3d6b82',
    },
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 550
  },
}));

var currentChoice = 0;
const updateText = (choice) => {
  if (currentChoice != choice) {
    let textContainer = document.querySelector("#textContainer");
    let boxes = document.querySelectorAll('.MuiBox-root');
    boxes[currentChoice].style.visibility = 'hidden';
    boxes[currentChoice].style.height = 0;
    boxes[choice].style.visibility = 'visible';
    boxes[choice].style.height = 'auto';
    currentChoice = choice;

    if (choice == 3) {
      for (let el of document.querySelectorAll('.partnerCard'))
        el.style.height = "auto";
    }
    else {
      for (let el of document.querySelectorAll('.partnerCard'))
        el.style.height = 0;
    }
  }
};


const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} alignItems="center" justify="center" className={classes.contentContainer}>
      <Grid item sm className={classes.cardRootContainer}>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => updateText(0) }>
            <CardContent>
              <Typography variant="h6" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                ECOSUMMIT 2020
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm className={classes.cardRootContainer}>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => updateText(1) }>
            <CardContent>
              <Typography variant="h6" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                DELEGATE APPLICATION
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm className={classes.cardRootContainer}>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => updateText(2) }>
            <CardContent>
              <Typography variant="h6" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                MEET THE SPEAKERS
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm className={classes.cardRootContainer}>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => updateText(3) }>
            <CardContent>
              <Typography variant="h6" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                OUR PARTNERS
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm className={classes.cardRootContainer}>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => updateText(4) }>
            <CardContent>
              <Typography variant="h6" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                CONTACT US
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
