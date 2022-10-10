import React, { useEffect, useState } from 'react';
import Table from './Table';
import './basetable.css';
import { Grid } from '@mui/material';
import { tableApi } from './service/config';



const BaseTable = () => {
  const [table_data,setTabledata]=useState([]);
  useEffect(()=>{
    tableApi().then((res)=>{
      setTabledata(res.data.data)
    },(error)=>{
      console.log(error);
    });
  },[]);
  
  return (

    <div className='App'>
      <Grid container >
        {table_data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Table item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BaseTable;