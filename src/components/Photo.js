import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogAction from '@material-ui/core/DialogActions';

import Zoom from '@material-ui/icons/ZoomIn';

const useStyles = makeStyles({
  icon: {
    color: 'rgba(255, 255, 255, 0.57)'
  }
});

const Photo = props => {
  const [image, setImage] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = image => {
    setOpen(true);
    setImage(image);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <GridList cols={3} cellHeight={180} style={{ marginTop: '1rem' }}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" />
        </GridListTile>
        {props.data.map(image => (
          <GridListTile key={image.id}>
            <img src={image.largeImageURL} alt={image.tags} />
            <GridListTileBar
              title={image.tags}
              subtitle={<span>by: {image.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about Ali`}
                  className={classes.icon}
                  onClick={() => handleClickOpen(image.largeImageURL)}
                >
                  <Zoom />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img src={image} alt="" style={{ width: '100%' }} />
        </DialogContent>
        <DialogAction>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogAction>
      </Dialog>
    </>
  );
};

export default Photo;
