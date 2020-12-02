import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Item from './partner-item';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  }
}));

const partnerDetails = [
  {name: "AISSO", img: "AISSO.png"},
  {name: "ASIEM", img: "ASIEM.png"},
  {name: "ATENEWS", img: "ATENEWS.png"},
  {name: "BAHAGHARI", img: "BAHAGHARI.png"},
  {name: "BMSEC", img: "BMSEC.png"},
  {name: "DYESABEL", img: "DYESABEL.png"},
  {name: "EASEC", img: "EASEC.png"},
  {name: "ESU", img: "ESU.png"},
  {name: "JPIChE", img: "JPIChE.png"},
  {name: "NSEC", img: "NSEC.png"},
  {name: "PNSA", img: "PNSA.png"},
  {name: "SAMAPULA", img: "SAMAPULA.png"},
  {name: "SDCA", img: "SDCA.png"},
  {name: "SOE", img: "SOE.png"},
  {name: "SS", img: "SS.png"},
  {name: "TABS", img: "TABS.png"},
]

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
