import React from "react";

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#233e4c',
    padding: 20,
    width: '100%'
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  }
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        Copyright {(new Date()).getFullYear()} SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development
      </Typography>
      <Typography variant="caption" color="textSecondary" component="p" className={classes.text}>
        Web Design by <Link href="https://twitter.com/masterrbation" color="inherit" target="_blank" rel="noopener">Junrick Bation</Link>
      </Typography>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
