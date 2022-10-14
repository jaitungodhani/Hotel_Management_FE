import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Slide, TextField } from '@mui/material';
// import { orderApiPost } from './service/config';
import { useDispatch, useSelector } from 'react-redux';
import { createorderStart, updateorderStart } from './redux/actions';

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

const selectcontrol = {
    marginTop: '10px',
    marginBottom: '10px'
}

export default function AddOrderModal({ open, handleClose, table, rawData, handleSnakbarClick }) {
    const dispatch = useDispatch();
    // const [categoryData, setCategoryData] = React.useState([]);
    const { categories } = useSelector((state) => state.category);
    const { items } = useSelector((state) => state.items);
    // const [items, setitems] = React.useState([]);
    const [category, setCategory] = React.useState('');
    const [item, setItem] = React.useState([]);
    const [subitem, setSubItem] = React.useState({});
    const [quantity, setQuantity] = React.useState(1);
    const [orderbtn, setOrderBtn] = React.useState(false);
    // const [openSnakbar, setOpenSnakbar] = React.useState(false);
    // const [transition, setTransition] = React.useState(undefined);
    // const [snakbarmsg,setSnakbarMsg]=React.useState("");
    // const [handleModelClose,sethandleModelClose]=React.useState(handleClose);

    // console.log(",,,,,,", items);
    React.useEffect(() => {
        if (rawData !== undefined) {
            setCategory(rawData.Item.category.id);
            setItem(items.filter(i => i.category.id === rawData.Item.category.id));
            setSubItem(rawData.Item.id);
            setQuantity(rawData.quantity);
            setOrderBtn(true);
        }

        // categoryApi().then((res) => {
        //     setCategoryData(res.data.data)
        // }, (error) => {
        //     console.log(error);
        // });
        // itemApi().then((res) => {
        //     setitems(res.data.data)
        // }, (error) => {
        //     console.log(error);
        // });

    }, [rawData])

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    const handleChange = (event) => {
        setCategory(event.target.value);
        setItem(items.filter(i => i.category.id === event.target.value))
    };

    const handleItem = (event) => {
        console.log("::::::", event.target.value);
        setSubItem(event.target.value);
    };

    const handleQuan = (event) => {
        // console.log("::::::",event.target.value);
        setQuantity(event.target.value);
    };

    const createOrder = () => {
        if (subitem === undefined || !quantity) {
            handleSnakbarClick(TransitionUp, "Fillup form correctly");
        }
        else {
            // orderApiPost({ Item_id: subitem, quantity: quantity, table: table.id }).then((res) => {
            //     console.log("####", res.data.error);
            //     if (res.data.error === false) {
            //         handleClose();
            //         // setSnakbarMsg("Order Create Successfully!!!");
            //         handleSnakbarClick(TransitionUp, "Order Create Successfully!!!!");
            //     }
            //     else {
            //         
            //         // setSnakbarMsg("Error in order create");
            //         handleSnakbarClick(TransitionUp, "Error in Order Create");
            //     }
            // }, (error) => {
            //     handleSnakbarClick(TransitionUp, "Error in Order Create");
            // })
            handleClose();
            dispatch(createorderStart({ Item_id: subitem, quantity: quantity, table: table.id }));
        };
    }

    const updateOrder = () => {
        dispatch(updateorderStart({ id: rawData.id, order_update_data: { quantity } }));
        handleClose();
    }
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
                        <FormControl fullWidth sx={selectcontrol}>
                            <TextField type="text" label="Table Name" value={table.name} disabled />
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={handleChange}
                                disabled={rawData ? true : false}
                                required
                            >
                                {categories.map((cat) => (
                                    <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                                ))

                                }
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <InputLabel id="demo-simple-select-label">Items</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={subitem}
                                label="Items"
                                onChange={handleItem}
                                disabled={rawData ? true : false}
                                required
                            >
                                {item.map((itm) => (
                                    <MenuItem key={itm.id} value={itm.id}>{itm.name}</MenuItem>
                                ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <TextField type="number" label="No of Items" InputProps={{ inputProps: { min: 0, max: 10 } }} value={quantity} onChange={handleQuan} required />
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <Button onClick={orderbtn ? updateOrder : createOrder} variant="contained">{orderbtn ? "Update Order" : "Create Order"}</Button>
                        </FormControl>
                    </Box>
                </Fade>
            </Modal>
            {/* <Snackbar
            open={openSnakbar}
            onClose={handleSnakbarClose}
            TransitionComponent={transition}
            message={snakbarmsg}
            key={transition ? transition.name : ''}
            /> */}
        </div>
    );
}
