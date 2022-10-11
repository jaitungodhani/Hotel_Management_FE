import React, { useEffect, useState } from 'react';
import Table from './Table';
import './basetable.css';
import { Grid, Slide, Snackbar } from '@mui/material';
import { tableApi } from './service/config';



const BaseTable = () => {
  const [table_data,setTabledata]=useState([]);
  const [openSnakbar, setOpenSnakbar] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [snakbarmsg,setSnakbarMsg]=React.useState("");

  useEffect(()=>{
    tableApi().then((res)=>{
      setTabledata(res.data.data)
    },(error)=>{
      console.log(error);
    });
  },[]);
  

  const handleSnakbarClose = () => {
    setOpenSnakbar(false);
  };

  const handleSnakbarClick = (Transition,msg) => {
    setSnakbarMsg(msg);
    setTransition(() => Transition);
    setOpenSnakbar(true);
  };

  return (

    <div className='App'>
      <Grid container >
        {table_data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Table item={item} handleSnakbarClick={handleSnakbarClick}/>
          </Grid>
        ))}
      </Grid>
      <Snackbar
            open={openSnakbar}
            onClose={handleSnakbarClose}
            TransitionComponent={transition}
            message={snakbarmsg}
            key={transition ? transition.name : ''}
            />
    </div>
  );
}

export default BaseTable;