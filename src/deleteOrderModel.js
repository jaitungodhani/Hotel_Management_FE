import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, Button, Fade, Slide } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteorderStart, loadtablesStart } from './redux/actions';

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
  [theme.breakpoints.down('md')]: {
    width: '85%',
    padding: '16px'
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
    padding: '22px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
});

export default function DeleteOrderModal({ open, handleClose, rawData, msg}) {
  console.log("Delete_data!!!!", rawData);
  const dispatch=useDispatch();
  const modelClose=()=>{
    handleClose(false)
  }

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
} 
  const deleteOrderApi=()=>{
      handleClose(false);
      dispatch(deleteorderStart(rawData.id));
      dispatch(loadtablesStart());
    // orderApidelete(rawData.id).then((res)=>{
    //   handleClose(false);
    //   handleSnakbarClick(TransitionUp, "Order Delete Successfully!!!!");
    // },(error)=>{
    //   handleClose(false);
    //   handleSnakbarClick(TransitionUp, "Error in Order Delete Process");
    // });
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" color="red">
              Delete Model
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {msg}
            </Typography>
            <div style={{display: "flex"}}>
            <div style={{marginLeft: "auto"}}>
              <Button variant='outlined' color='error' onClick={modelClose}>Cancle</Button>
              <Button variant='contained' color='error' sx={{ml:1}} onClick={deleteOrderApi}>Delete</Button>
            </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
