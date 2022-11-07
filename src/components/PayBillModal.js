import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fade,Backdrop} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createBillStart, liveBillStart } from '../redux/actions';

const style = (theme)=>({
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

export default function PayBillModal({open,handleClose,table,total_amount}) {
  const dispatch = useDispatch();

  const modelClose=()=>{
    handleClose();
  };

  const onBillCreate=()=>{
    console.log(table,total_amount);
    dispatch(createBillStart({table:table, pay:true, total_amount:total_amount}));
    dispatch(liveBillStart());
    handleClose();
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
            <Typography id="transition-modal-title" variant="h6" component="h2" color="success">
              Pay Bill
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Are you sure for pay???
            </Typography>
            <div style={{display: "flex"}}>
            <div style={{marginLeft: "auto"}}>
              <Button variant='outlined' color='success' onClick={modelClose}>Cancle</Button>
              <Button variant='contained' color='success' sx={{ml:1}} onClick={onBillCreate}>Pay</Button>
            </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}