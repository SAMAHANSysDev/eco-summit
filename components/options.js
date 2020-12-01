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

// text stuffs
const Texts = [
  ["Delegate Application", "Be a delegate!", "Ecosummit 2020 aims to convene over 200 youth leaders and advocates from the whole Philippines to discuss climate change, environmental justice and sustainability. We invite you to be part of this historic national summit.", "<b><a href='https://bit.ly/EcoSummit2020Registration'>Register now!</a></b>", ""],
  ["Meet the Speakers", "Details of the Ecosummit 2020 speakers will be available soon.", "", "", ""],
  ["Contact us", "<center>Facebook: <a href='https://www.facebook.com/2020ecosummit'>Ecosummit 2020</a></center>", "<center>Twitter: <a href='https://www.twitter.com/ecosummit2020'>Ecosummit2020</a></center>", "<center>E-mail: <a href='mailto: ecosummit.ph@gmail.com'>ecosummit.ph@gmail.com</a></center>", ""],
];

const updateEcosummit = () => {
  document.querySelector('#p0'). innerHTML = `<span style="color: #d17a5e">ECO</span><span style="color: #548c96">SUMMIT</span><span style="color: #548c96; font-weight: 400">2020</span>`;
  document.querySelector('#p1').innerHTML = "The <b>Ecosummit 2020</b> is the <b>First National Youth Environmental Forum</b> dedicated to discussing key environmental topics that revolve around environmental justice, sustainability and climate action. The forum will bring together exemplary environmental advocates from the Philippines and the world to tell stories of inspiration and challenge to over 200 youth from across the Philippines.";
  document.querySelector('#p2').innerHTML = "This one-day convention that will be held on <b>December 12</b> shall provide a platform to give light to the urgency of responding to climate injustices and build striking environmental awareness that will spark movement from the youth to align their commitment to climate action.";
  document.querySelector('#p3').innerHTML = "The <b>SAMAHAN ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao</b>, the Official Student Government of Ateneo de Davao University, is the lead organizer of the the summit. This year, the SAMAHAN carries with it the commitment to the environment through events that aim to bring awareness to the youth and inspire them to devote themselves to climate action.";
  document.querySelector('#p4').innerHTML = "";
}

const updateDelegateApplication = () => {
  document.querySelector('#p0'). innerHTML = `<span style="color: #d17a5e">DELEGATE</span> <span style="color: #548c96">APPLICATION</span>`;
  document.querySelector('#p1').innerHTML = "<center style='font-weight: 600; letter-spacing: 0.05em; font-size: 1.5rem'>BE A DELEGATE!</center>";
  document.querySelector('#p2').innerHTML = "Ecosummit 2020 aims to convene over 200 youth leaders and advocates from the whole Philippines to discuss climate change, environmental justice and sustainability.";
  document.querySelector('#p3').innerHTML = "<center style='font-weight: 600; letter-spacing: 0.05em; font-size: 1.5rem'>We invite you to be part of this historic national summit.</center>";
  document.querySelector('#p4').innerHTML = "<center style='font-weight: 700; letter-spacing: 0.05em; font-size: 2rem'><a href='https://bit.ly/EcoSummit2020Registration'>Register now!</a></center>";
}

const updateMeetSpeakers = () => {
  document.querySelector('#p0'). innerHTML = `<span style="color: #d17a5e">MEET</span> <span style="color: #548c96; font-weight: 400">THE</span> <span style="color: #548c96">SPEAKERS</span>`;
  document.querySelector('#p1').innerHTML = "Details of the Ecosummit 2020 speakers will be available soon.";
  document.querySelector('#p2').innerHTML = "";
  document.querySelector('#p3').innerHTML = "";
  document.querySelector('#p4').innerHTML = "";
}

const updateContactUs = () => {
  document.querySelector('#p0'). innerHTML = `<span style="color: #d17a5e">CONTACT</span> <span style="color: #548c96">US</span>`;
  document.querySelector('#p1').innerHTML = "<center>Facebook: <a href='https://www.facebook.com/2020ecosummit'>Ecosummit 2020</a></center>";
  document.querySelector('#p2').innerHTML = "<center>Twitter: <a href='https://www.twitter.com/ecosummit2020'>Ecosummit2020</a></center>";
  document.querySelector('#p3').innerHTML = "<center>E-mail: <a href='mailto: ecosummit.ph@gmail.com'>ecosummit.ph@gmail.com</a></center>";
  document.querySelector('#p4').innerHTML = "";
}

var currentChoice = 0;
const UpdateText = (choice) => {
  if (currentChoice != choice) {
    currentChoice = choice;
    let textContainer = document.querySelector("#textContainer");
    textContainer.classList.add("fadeElement");

    setTimeout(() => textContainer.classList.remove("fadeElement"), 250);
    switch(choice) {
      case 0: setTimeout(updateEcosummit, 125); break;
      case 1: setTimeout(updateDelegateApplication, 125); break;
      case 2: setTimeout(updateMeetSpeakers, 125); break;
      case 3: setTimeout(updateContactUs, 125); break;
      default: break;
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
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(0) }>
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
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(1) }>
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
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(2) }>
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
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(3) }>
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
