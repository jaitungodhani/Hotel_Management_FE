import React from 'react';
import "./Table.css";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TransitionsModal from './show_order';
import AddOrderModal from './add_order';
import { orderApi} from './service/config';


const Table =({item,handleSnakbarClick})=>{
    const [open, setOpen] = React.useState(false);
    const [orderData,setOrderData]=React.useState([]);
    const handleOpen = () => {
        setOpen(true);
        orderApi(item.id).then((res)=>{
            setOrderData(res.data.data);
        },(error)=>{
            console.log(error);
        });
    };
    const handleClose = () => setOpen(false);

    const [openaddorder, setOrder] = React.useState(false);
    const handleaddorderOpen = () => {
        setOrder(true);

    };
    
    const handleaddorderClose = () => setOrder(false);
    return(
        <div className="table">
            <div className='upper'>
                <TableRestaurantIcon className='icon'/>
                <h1>{item.name}</h1>
            </div>
            
            <div className="bottom">
                <button onClick={handleOpen} ><VisibilityIcon /></button>
                <button onClick={handleaddorderOpen}><AddCircleOutlineIcon /></button>
            </div>

            <TransitionsModal open={open} handleClose={handleClose} table={item} orderData={orderData} handleSnakbarClick={handleSnakbarClick}/>
            <AddOrderModal open={openaddorder} handleClose={handleaddorderClose} table={item} handleSnakbarClick={handleSnakbarClick}/>
        </div>
    );
}

export default Table;