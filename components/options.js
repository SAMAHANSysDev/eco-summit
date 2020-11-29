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
  cardRoot: {
    minWidth: 300,
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 550
  },
}));

// text stuffs
const Texts = [
  ["Ecosummit 2020", "The <b>Ecosummit 2020</b> is the <b>First National Youth Environmental Forum</b> dedicated to discussing key environmental topics that revolve around environmental justice, sustainability and climate action. The forum will bring together exemplary environmental advocates from the Philippines and the world to tell stories of inspiration and challenge to over 200 youth from across the Philippines.", "This one-day convention that will be held on <b>December 12</b> shall provide a platform to give light to the urgency of responding to climate injustices and build striking environmental awareness that will spark movement from the youth to align their commitment to climate action.", "The <b>SAMAHAN ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao</b>, the Official Student Government of Ateneo de Davao University, is the lead organizer of the the summit. This year, the SAMAHAN carries with it the commitment to the environment through events that aim to bring awareness to the youth and inspire them to devote themselves to climate action.", ""],
  ["Delegate Application", "Be a delegate!", "Ecosummit 2020 aims to convene over 200 youth leaders and advocates from the whole Philippines to discuss climate change, environmental justice and sustainability. We invite you to be part of this historic national summit.", "<a href='https://bit.ly/EcoSummit2020Registration'>Register now!</a>", ""],
  ["Meet the Speakers", "Details of the Ecosummit 2020 speakers will be available soon.", "", "", ""],
  ["Contact us", "<center>Facebook: <a href='https://www.facebook.com/2020ecosummit'>Ecosummit 2020</a></center>", "<center>Twitter: <a href='https://www.twitter.com/ecosummit2020'>Ecosummit2020</a></center>", "<center>E-mail: <a href='mailto: ecosummit.ph@gmail.com'>ecosummit.ph@gmail.com</a></center>", ""],
];

const UpdateText = (texts) => {
  if (document.querySelector("#p0").innerHTML != texts[0]) {
    let textContainer = document.querySelector("#textContainer");
    textContainer.classList.add("fadeElement");
    setTimeout(() => textContainer.classList.remove("fadeElement"), 250);
    setTimeout(() => {
      for (let i = 0; i < texts.length; i++)
      document.querySelector(`#p${i}`).innerHTML = texts[i];
    }, 125);
  }
};

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} alignItems="center" justify="center" className={classes.contentContainer}>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(Texts[0]) }>
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                Ecosummit 2020
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(Texts[1]) }>
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                Delegate Application
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(Texts[2]) }>
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                Meet the Speakers
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm>
        <Card className={classes.cardRoot} variant="outlined">
          <CardActionArea className='cardbtn' onClick={ () => UpdateText(Texts[3]) }>
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.cardText} style={{ lineHeight: '1.5em' }}>
                Contact Us
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
