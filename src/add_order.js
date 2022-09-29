import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
};

const selectcontrol = {
    marginTop: '10px',
    marginBottom: '10px'
}

export default function AddOrderModal({ open, handleClose, table, rawData }) {
    const [category, setCategory] = React.useState('');
    const [item, setItem] = React.useState([]);
    const [subitem, setSubItem] = React.useState({});
    const [quantity, setQuantity] = React.useState();
    const [orderbtn, setOrderBtn] = React.useState(false);

    React.useEffect(() => {
        if (rawData !== undefined) {
            setCategory(rawData.item.category.id);
            setItem(items.filter(i => i.category.id === rawData.item.category.id));
            setSubItem(rawData.item.id);
            setQuantity(rawData.quantity);
            setOrderBtn(true);
        }
    }, [rawData])


    const handleChange = (event) => {
        setCategory(event.target.value);
        setItem(items.filter(i => i.category.id === event.target.value))
    };

    const handleItem = (event) => {
        // console.log("::::::",event.target.value);
        setSubItem(event.target.value);
    };

    const handleQuan = (event) => {
        // console.log("::::::",event.target.value);
        setQuantity(event.target.value);
    };
    const category_data = [
        {
            "id": 1,
            "name": "punjabi"
        },
        {
            "id": 2,
            "name": "Gujarati"
        },
        {
            "id": 3,
            "name": "South Indian"
        }
    ]

    const items = [
        {
            "id": 1,
            "name": "Panir Tikka",
            "category": {
                "id": 1,
                "name": "punjabi"
            }
        },
        {
            "id": 2,
            "name": "Khichadi",
            "category": {
                "id": 2,
                "name": "Gujarati"
            }
        },
        {
            "id": 3,
            "name": "Maisure",
            "category": {
                "id": 3,
                "name": "South Indian"
            }
        }
    ]
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
                            <TextField type="text" label="Table Name" value={table} disabled />
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={handleChange}
                                disabled={rawData?true:false}
                            >
                                {category_data.map((cat) => (
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
                                disabled={rawData?true:false}
                            >
                                {item.map((itm) => (
                                    <MenuItem key={itm.id} value={itm.id}>{itm.name}</MenuItem>
                                ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <TextField type="number" label="No of Items" InputProps={{ inputProps: { min: 0, max: 10 } }} defaultValue="1" value={quantity} onChange={handleQuan}/>
                        </FormControl>

                        <FormControl fullWidth sx={selectcontrol}>
                            <Button variant="contained">{orderbtn?"Update Order":"Create Order"}</Button>
                        </FormControl>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
