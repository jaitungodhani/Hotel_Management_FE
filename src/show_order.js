import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import Table, { tableClasses } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddOrderModal from './add_order';
import { IconButton } from '@mui/material';
import { orderApi } from './service/config';

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

const buttonstyledClasses = {
    "delete": {
        color: "red"
    },
    "edit": {
        color: "blue"
    }
}

const getOrderStatusColor = (status) => {
    if (status === "Completed") {
        return "green";
    } else if (status === "Processing") {
        return "orange";
    } else if (status === "Waiting") {
        return "red";
    }
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Item', 159, 6.0, 24, 4.0),
//     createData('Category', 237, 9.0, 37, 4.3),
//     createData('Quan.', 262, 16.0, 24, 6.0)
// ];


export default function TransitionsModal({ open, handleClose, table }) {
    const [updateorder, setupdateOrder] = React.useState(false);
    const [orderData,setOrderData]=React.useState([]);
    const [updateorderData, setUpdateorderData] = React.useState();
    const handleUpdateOpen = (rowData) => {
        console.log(rowData);
        setupdateOrder(true);
        setUpdateorderData(rowData);
    }
    const handleUpdateClose = () => setupdateOrder(false);
    
    React.useEffect(()=>{
        orderApi().then((res)=>{
            setOrderData(res.data.data);
        },(error)=>{
            console.log(error);
        });
    },[]);

    // const order_data = [
    //     {
    //         id: 1,
    //         item: {
    //             id: 1,
    //             name: "Panir Tikka",
    //             category: {
    //                 id: 1,
    //                 name: "punjabi"
    //             }
    //         },
    //         quantity: 2,
    //         status: "Done"
    //     },
    //     {
    //         id: 2,
    //         item: {
    //             id: 2,
    //             name: "Khichadi",
    //             category: {
    //                 id: 2,
    //                 name: "Gujarati"
    //             }
    //         },
    //         quantity: 1,
    //         status: "Waiting"
    //     },
    //     {
    //         id: 3,
    //         item: {
    //             id: 3,
    //             name: "Maisure",
    //             category: {
    //                 id: 3,
    //                 name: "South Indian"
    //             }
    //         },
    //         quantity: 1,
    //         status: "Preparing"
    //     }
    // ]
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
                        <h2>{table}</h2>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Item</StyledTableCell>
                                        <StyledTableCell align="right">Category</StyledTableCell>
                                        <StyledTableCell align="right">Quan.</StyledTableCell>
                                        <StyledTableCell align="right">Status</StyledTableCell>
                                        <StyledTableCell align="right">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderData.map((row) => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.Item.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.Item.category.name}</StyledTableCell>
                                            <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                                            <StyledTableCell align="right" sx={{ color: getOrderStatusColor(row.status) }}>{row.status}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <div>
                                                    <IconButton><DeleteIcon sx={buttonstyledClasses.delete} /></IconButton>
                                                    <IconButton>
                                                        <EditIcon onClick={() => handleUpdateOpen(row)} sx={buttonstyledClasses.edit} /></IconButton>
                                                    <AddOrderModal open={updateorder} handleClose={handleUpdateClose} rawData={updateorderData} table={table} />
                                                </div>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
}
