import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyle = makeStyles({
  root: {
    background: 'teal'
  },
  title: {
    padding: '1rem'
  }
});
const Navbar = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Container>
          <Typography variant="h6" className={classes.title}>
            Image Viewer
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
