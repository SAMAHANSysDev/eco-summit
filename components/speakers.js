import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { partnerDetails } from '../utils/data';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  cardRootContainer: {
    height: 0,
    width: '90%',
  },
  cardRoot: {
    height: 0,
    width: '100%',
    border: 0,
    background: 'rgba(0, 0, 0, 0)'
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 550,
    textAlign: 'center',
    lineHeight: '1rem'
  },
  imageContent: {
    width: '100%',
    height: 'auto'
  }
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={3} justify="center" className={classes.contentContainer}>
      <Grid item sm={6} className={classes.cardRootContainer + " speakerCard"}>
        <Card className={classes.cardRoot + " speakerCard"} variant="outlined">
          <CardContent>
            <img src={"/speakers/golle.jpg"} className={classes.imageContent} />
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontWeight: 600 }}>
              Chinkie Pelino-Golle
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontStyle: 'italic' }}>
              Executive Director
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText}>
              Interfacing Development Interventions for Sustainability (IDIS)
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={6} className={classes.cardRootContainer + " speakerCard"}>
        <Card className={classes.cardRoot + " speakerCard"} variant="outlined">
          <CardContent>
            <img src={"/speakers/legarda.jpg"} className={classes.imageContent} />
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontWeight: 600 }}>
              Congresswoman Loren Legarda
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontStyle: 'italic' }}>
              Representative
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText}>
              Lone District of Antique
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={6} className={classes.cardRootContainer + " speakerCard"}>
        <Card className={classes.cardRoot + " speakerCard"} variant="outlined">
          <CardContent>
            <img src={"/speakers/tabora.jpg"} className={classes.imageContent} />
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontWeight: 600 }}>
              Fr. Joel Tabora, SJ
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontStyle: 'italic' }}>
              University President
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText}>
              Ateneo de Davao University
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={6} className={classes.cardRootContainer + " speakerCard"}>
        <Card className={classes.cardRoot + " speakerCard"} variant="outlined">
          <CardContent>
            <img src={"/speakers/guerrero.jpg"} className={classes.imageContent} />
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontWeight: 600 }}>
              Lea Guerrero
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontStyle: 'italic' }}>
              Director
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText}>
              Greenpeace Philippines
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={6} className={classes.cardRootContainer + " speakerCard"}>
        <Card className={classes.cardRoot + " speakerCard"} variant="outlined">
          <CardContent>
            <img src={"/speakers/lavina.jpg"} className={classes.imageContent} />
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontWeight: 600 }}>
              Tony La Vina
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText}>
              Ateneo School of Government
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={6} className={classes.cardRootContainer + " speakerCard"}>
        <Card className={classes.cardRoot + " speakerCard"} variant="outlined">
          <CardContent>
            <img src={"/speakers/abiera.jpg"} className={classes.imageContent} />
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontWeight: 600 }}>
              Dun Oliver Abiera
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText} style={{ fontStyle: 'italic' }}>
              Founder
            </Typography>
            <Typography gutterBottom variant="body1" component="h2" className={classes.cardText}>
              Youth Advocates Building Opportunities and Network in Governance (YABONG) Philippines
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
