import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
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
import DeleteOrderModal from './deleteOrderModel';
import { useSelector } from 'react-redux';



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

export default function TransitionsModal({ open, handleClose, table, orderData }) {
    const [updateorder, setupdateOrder] = React.useState(false);
    const [deleteorder, setdeleteOrder] = React.useState(false);
    const [deleteorderdata, setDeleteOrderData] = React.useState();
    const [updateorderData, setUpdateorderData] = React.useState();
    const {orders}=useSelector((state)=>state.orders);
    const handleUpdateOpen = (rowData) => {
        console.log(rowData);
        setupdateOrder(true);
        setUpdateorderData(rowData);
    }
    const handleUpdateClose = () => setupdateOrder(false);

    const handleDeleteOpen = (rawData) => {
        setdeleteOrder(true);
        setDeleteOrderData(rawData);
    }

    const handleDeleteClose = () => setdeleteOrder(false);
    // React.useEffect(()=>{
    //     orderApiPost({"table_id":table.id}).then((res)=>{
    //         console.log(res.data.data);
    //         setOrderData(res.data.data);
    //     },(error)=>{
    //         console.log(error);
    //     });
    // },[]);


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
                        <h2>{table.name}</h2>
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
                                    {orders.map((row) => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.Item.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.Item.category.name}</StyledTableCell>
                                            <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                                            <StyledTableCell align="right" sx={{ color: getOrderStatusColor(row.status) }}>{row.status}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <div>
                                                    <IconButton>
                                                        <DeleteIcon onClick={() => handleDeleteOpen(row)} sx={buttonstyledClasses.delete} />
                                                    </IconButton>
                                                    <DeleteOrderModal handleClose={handleDeleteClose} open={deleteorder} rawData={deleteorderdata} msg="Are you sure for delete order?" />
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
