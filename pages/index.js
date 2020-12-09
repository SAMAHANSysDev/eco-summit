import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import dynamic from 'next/dynamic';
const Options = dynamic(() => import('../components/options'));
const Partners = dynamic(() => import('../components/partners'));
const Speakers = dynamic(() => import('../components/speakers'));
const Delegates = dynamic(() => import('../components/delegates'));

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
    align: 'center',
  },
  contentContainer3: {
    backgroundImage: `url('/bgmountain.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  contentContainer2: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    padding: '2%',
  },
  textContent: {
    textAlign: 'justify',
    marginTop: '20px',
    marginBottom: '20px',
  }
}));

const Page = ({faqs}) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div style= {{ background: '#f2fdff' }}>
      <div className={classes.rootContainer}>

        <div style={{ height: 100 }}></div>

        <div style={{ margin: 'auto' }}>
          <Grid container direction="row" alignItems="stretch" className={classes.contentContainer}>
            
            <Grid item md={9}>
              <Grid container direction="row" alignItems="stretch" className={classes.contentContainer}>
                <Grid item sm={4} className={classes.contentContainer2}>
                  <Options />
                </Grid>
                <Grid item sm={8} id='textContainer' className={classes.contentContainer2}>
                  
                  <Box style={{visibility: 'visible', height: 'auto'}}>
                    <Typography variant="h4" component="h2"><Typography variant="h4" component="span" style={{ color: '#d17a5e' }}>ECO</Typography><Typography variant="h4" component="span" style={{ color: '#548c96' }}>SUMMIT</Typography><Typography variant="h4" component="span" style={{ color: '#548c96', fontWeight: 400 }}>2020</Typography></Typography>
                    <Typography variant="body1" component="p" className={classes.textContent}>The <b>Ecosummit 2020</b> is the <b>First National Youth Environmental Forum</b> dedicated to discussing key environmental topics that revolve around environmental justice, sustainability and climate action. The forum will bring together exemplary environmental advocates from the Philippines and the world to tell stories of inspiration and challenge to over 200 youth from across the Philippines.</Typography>
                    <Typography variant="body1" component="p" className={classes.textContent}>This one-day convention that will be held on <b>December 12</b> shall provide a platform to give light to the urgency of responding to climate injustices and build striking environmental awareness that will spark movement from the youth to align their commitment to climate action.</Typography>
                    <Typography variant="body1" component="p" className={classes.textContent}>The <b>SAMAHAN ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao</b>, the Official Student Government of Ateneo de Davao University, is the lead organizer of the the summit. This year, the SAMAHAN carries with it the commitment to the environment through events that aim to bring awareness to the youth and inspire them to devote themselves to climate action. </Typography>
                    <img src="pfp.png" style={{ width: '50%' }} />
                  </Box>
                  <Box style={{visibility: 'hidden'}}>
                    <Typography variant="h4" component="h2" style={{ color: '#d17a5e' }}>DELEGATES</Typography>
                    <div style={{ height: 20 }}></div>
                    <Delegates />
                  </Box>

                  <Box style={{visibility: 'hidden', height: 0}}>
                    <Typography variant="h4" component="h2"><Typography variant="h4" component="span" style={{ color: '#d17a5e' }}>MEET</Typography> <Typography variant="h4" component="span" style={{ color: '#d17a5e', fontWeight: 400 }}>THE</Typography> <Typography variant="h4" component="span" style={{ color: '#548c96' }}>SPEAKERS</Typography></Typography>
                    <Speakers />
                  </Box>

                  <Box style={{visibility: 'hidden', height: 0}}>
                    <Typography variant="h4" component="h2"><Typography variant="h4" component="span" style={{ color: '#d17a5e' }}>OUR</Typography> <Typography variant="h4" component="span" style={{ color: '#548c96' }}>PARTNERS</Typography></Typography>
                    <Partners />
                  </Box>

                  <Box style={{visibility: 'hidden', height: 0, background: 'url(bggiraffe.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} >
                    <Typography variant="h4" component="h2"><Typography variant="h4" component="span" style={{ color: '#d17a5e' }}>CONTACT</Typography> <Typography variant="h4" component="span" style={{ color: '#548c96' }}>US</Typography></Typography>
                    <Typography variant="body1" component="p" className={classes.textContent} style={{ textAlign: 'center' }}>Facebook: <Link href='https://www.facebook.com/2020ecosummit' target='_blank'>Ecosummit 2020</Link></Typography>
                    <Typography variant="body1" component="p" className={classes.textContent} style={{ textAlign: 'center' }}>Twitter: <Link href='https://www.twitter.com/ecosummit2020' target='_blank'>Ecosummit2020</Link></Typography>
                    <Typography variant="body1" component="p" className={classes.textContent} style={{ textAlign: 'center' }}>Email: <Link href='mailto: ecosummit.ph@gmail.com' target='_blank'>ecosummit.ph@gmail.com</Link></Typography>
                    <div style={{ height: 250 }}></div>
                  </Box>
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
      <div style={{ background: '#233e4c' }}>
        <img src='/bgmountain.png' style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default Page;
