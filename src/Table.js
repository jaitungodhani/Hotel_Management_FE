import React from 'react';
import "./Table.css";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TransitionsModal from './show_order';
import AddOrderModal from './add_order';


const Table =({item})=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openaddorder, setOrder] = React.useState(false);
    const handleaddorderOpen = () => setOrder(true);
    const handleaddorderClose = () => setOrder(false);
    return(
        <div className="table">
            <div className='upper'>
                <TableRestaurantIcon className='icon'/>
                <h1>{item}</h1>
            </div>
            
            <div className="bottom">
                <button onClick={handleOpen} ><VisibilityIcon /></button>
                <button onClick={handleaddorderOpen}><AddCircleOutlineIcon /></button>
            </div>

            <TransitionsModal open={open} handleClose={handleClose}/>
            <AddOrderModal open={openaddorder} handleClose={handleaddorderClose}/>
        </div>
    );
}

export default Table;