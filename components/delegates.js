import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { DataGrid } from '@material-ui/data-grid';

import { delegatesList } from '../utils/data';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: '100%',
  }
}));

const Page = () => {
  const classes = useStyles();

  return (
    <div className="delegateItem" style={{ height: 0, width: '100%', textAlign: 'left' }}>
      <DataGrid className={classes.rootContainer} columns={[{ field: 'Name', flex: 0.4}, {field: 'School', flex:0.6}]} rows={ delegatesList }/>
    </div>
  );
};

export default Page;
