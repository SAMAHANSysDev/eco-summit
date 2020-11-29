import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import { fade, makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import { cdnURL } from '../utils/constants';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  test: {
    backgroundImage: `url('/ecosummit-header.png')`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }
}));

function SearchAppBar() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.test} >
        <img src={`/ecosummit-header.png`} style={{ width: '100%', height: 'auto', opacity: 0 }} />
      </AppBar>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
