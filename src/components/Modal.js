import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';
import { width } from '@mui/system';
import useWindowSize from '../components/WindowSize';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const size = useWindowSize();

  console.log(size.width);

  const opts = {
    height: '900',
    width: '1600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const mdScreens = {
    height: '700',
    width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const smScreens = {
    height: '300',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <Button onClick={handleOpen} className='button2'>
        Watch Trailer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='youtube-modal'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <YouTube
              videoId='8hsPkdrzdRU'
              opts={
                size.width < 748
                  ? smScreens
                  : size.width < 1600
                  ? mdScreens
                  : opts
              }
              className='youtube-modal'
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
