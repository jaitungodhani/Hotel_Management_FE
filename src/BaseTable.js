import React from 'react';
import Table from './Table';
import './basetable.css';
import { Grid } from '@mui/material';

const BaseTable = () => {
  const table_data = [{
    "table_no": "T1"
  },
  {
    "table_no": "T2"
  },
  {
    "table_no": "T3"
  },
  {
    "table_no": "T4"
  }, {
    "table_no": "T1"
  },
  {
    "table_no": "T2"
  },
  {
    "table_no": "T3"
  },
  {
    "table_no": "T4"
  },
  {
    "table_no": "T1"
  },
  {
    "table_no": "T2"
  },
  {
    "table_no": "T3"
  },
  {
    "table_no": "T4"
  }
  ]
  return (

    <div className='App'>
      <Grid container >
        {table_data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Table item={item.table_no} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BaseTable;