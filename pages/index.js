import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import dynamic from 'next/dynamic';
const Options = dynamic(() => import('../components/options'));

import { TwitterTimelineEmbed } from 'react-twitter-embed';

//import { cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%',
  },
  
  rootContainer: {
    width: '100%',
    marginBottom: 80,
    align: 'center'
  },
  contentContainer2: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  }
}));

const Page = ({faqs}) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={1} alignItems="stretch" className={classes.contentContainer}>
          
          <Grid item md={9} className={classes.rootContainer}>
            <Grid container direction="row" spacing={3} alignItems="stretch" className={classes.contentContainer}>
              <Grid item sm={4} className={classes.contentContainer2}>
                <Options />
              </Grid>
              <Grid item sm={8} id='textContainer' className={classes.contentContainer2}>
                <Typography id="p0" variant="h4" component="h2"><Typography variant="h4" component="span" style={{ color: '#d17a5e' }}>ECO</Typography><Typography variant="h4" component="span" style={{ color: '#548c96' }}>SUMMIT</Typography><Typography variant="h4" component="span" style={{ color: '#548c96', fontWeight: 400 }}>2020</Typography></Typography>
                <Typography id="p1" variant="body1" component="p" style={{ textAlign: 'justify', marginTop: '20px', marginBottom: '20px' }}>The <b>Ecosummit 2020</b> is the <b>First National Youth Environmental Forum</b> dedicated to discussing key environmental topics that revolve around environmental justice, sustainability and climate action. The forum will bring together exemplary environmental advocates from the Philippines and the world to tell stories of inspiration and challenge to over 200 youth from across the Philippines.</Typography>
                <Typography id="p2" variant="body1" component="p" style={{ textAlign: 'justify', marginTop: '20px', marginBottom: '20px' }}>This one-day convention that will be held on <b>December 12</b> shall provide a platform to give light to the urgency of responding to climate injustices and build striking environmental awareness that will spark movement from the youth to align their commitment to climate action.</Typography>
                <Typography id="p3" variant="body1" component="p" style={{ textAlign: 'justify', marginTop: '20px', marginBottom: '20px' }}>The <b>SAMAHAN ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao</b>, the Official Student Government of Ateneo de Davao University, is the lead organizer of the the summit. This year, the SAMAHAN carries with it the commitment to the environment through events that aim to bring awareness to the youth and inspire them to devote themselves to climate action. </Typography>
                <Typography id="p4" variant="body1" component="p" style={{ textAlign: 'justify', marginTop: '20px', marginBottom: '20px' }} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3}>
            <div style={{ height: 20 }} />
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ecosummit2020"
              options={{height: 800, width: '100vw'}}
            />
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Page;
