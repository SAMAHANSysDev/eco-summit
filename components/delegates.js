import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

import Item from './delegate-item';

import { delegatesList } from '../utils/data';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: 0,
  },
  contentContainer: {
    margin: 'auto',
    width: '100%',
  }
}));

const getFirsts = (li) => {
  let content = [];
  for (let i=0; i<15; i++) {
    content.push(<Item key={i} name={li[i].name} school={li[i].school} />);
  }
  return content;
}

const updatePage = (evt, pagenum) => {
  let nameItems = document.querySelectorAll('.delegateItemName');
  let schoolItems = document.querySelectorAll('.delegateItemSchool');
  let index = (pagenum-1)*15;

  for (let i=0; i<15; i++) {
    if (delegatesList[index] == undefined) {
      nameItems[i].innerHTML = "";
      schoolItems[i].innerHTML = "";
    }
    else {
      nameItems[i].innerHTML = delegatesList[index].name;
      schoolItems[i].innerHTML = delegatesList[index].school;
    }
    index++;
  }
}

const Page = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={4} alignItems="center" justify="center" className={classes.rootContainer + " delegateItem"}>
      <Grid item style={{ width: '100%' }}>
        <Grid container direction="column" className={classes.contentContainer}>
          <Grid item>
            <Grid container direction="row" spacing={1} className={classes.contentContainer}>
              <Grid item xs={4}>
                <Typography variant="h6" component="p">
                  Name
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" component="p">
                  School
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <Grid container spacing={1} direction="column">
          { getFirsts(delegatesList) }
        </Grid>
      </Grid>
      <Grid item>
        <Pagination count={55} color="primary" onChange={ updatePage } />
      </Grid>
    </Grid>
  );
};

export default Page;
