import React from 'react';
import "./Table.css";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Table =({item})=>{
    return(
        <div className="table">
            <div className='upper'>
                <TableRestaurantIcon className='icon'/>
                <h1>{item}</h1>
            </div>
            
            <div className="bottom">
                <button><VisibilityIcon /></button>
                <button><AddCircleOutlineIcon /></button>
            </div>
        </div>
    );
}

export default Table;