import React from "react";
import "./bill.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PayBillModal from "./PayBillModal";

const columns = [
  { id: "item", label: "Item", minWidth: 120 },
  { id: "price", label: "Price", minWidth: 90 },
  {
    id: "quan",
    label: "Quan.",
    minWidth: 90,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 40,
  },
];

const Bill = ({ bill_data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(item, price, quan, amount) {
    return { item, price, quan, amount };
  }

  const rows = [];

  bill_data.order?.map((order) => {
    rows.push(
      createData(
        order.Item.name,
        order.Item.price,
        `x ${order.quantity}`,
        order.Item.price * order.quantity
      )
    );
  });

  return (
    <div className="Main">
      <h3 className="Table">{bill_data.name}</h3>
      <div className="OrderTable">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 250 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      sx={{ padding: 1 }}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            sx={{ padding: 0.8 }}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        {/* <h6>{order.Item.name} {order.Item.price} x {order.quantity}  {order.Item.price * order.quantity}</h6> */}
      </div>
      {/* ))} */}
      <h3 className="TotalAmonut">
        {" "}
        Total Amount :- {bill_data.total_amount} /-
      </h3>

      <button onClick={handleOpen} className="PayButton">PAY</button>
      <PayBillModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Bill;
