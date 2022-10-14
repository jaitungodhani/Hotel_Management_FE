import React from 'react';
import "./Table.css";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TransitionsModal from './show_order';
import AddOrderModal from './add_order';
// import { orderApi} from './service/config';
import { useDispatch, useSelector } from 'react-redux';
import { loadorderStart } from './redux/actions';


const Table =({item,handleSnakbarClick})=>{
    const dispatch=useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        dispatch(loadorderStart(item.id));
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

            {open && <TransitionsModal open={open} handleClose={handleClose} table={item}  handleSnakbarClick={handleSnakbarClick}/>}
            <AddOrderModal open={openaddorder} handleClose={handleaddorderClose} table={item} handleSnakbarClick={handleSnakbarClick}/>
        </div>
    );
}

export default Table;