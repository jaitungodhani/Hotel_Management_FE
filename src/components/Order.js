import React, { useState } from "react";
import "./order.css";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KitchenIcon from '@mui/icons-material/Kitchen';

const Order=({particular_order})=>{
    const [orderStatus,setOrderStatus]=useState(particular_order.status);
    const setWaitingStatus=()=>{
        setOrderStatus("Waiting");
    }
    const setProcessingStatus=()=>{
        setOrderStatus("Processing");
    }
    const setCompletedStatus=()=>{
        setOrderStatus("Completed");
    }
    return(
        <div className="order">
              <div className="top">
                <h3 className="tablename">{particular_order.table.name}</h3>
                <h3 className="orderquan">{particular_order.quantity}</h3>
              </div>
              <div className="upper">
                <h1>{particular_order.Item.name}</h1>
              </div>
              <div className="bottom">
                <button
                  onClick={setWaitingStatus}
                  style={{
                    backgroundColor: orderStatus === "Waiting" && "#FF5C5C",
                    color: orderStatus === "Waiting" && "black",
                  }}
                >
                  <PendingIcon />
                </button>
                <button
                onClick={setProcessingStatus}
                  style={{
                    backgroundColor: orderStatus === "Processing" && "#FFBB28",
                    color: orderStatus === "Processing" && "black",
                  }}
                >
                  <KitchenIcon />
                </button>
                <button
                onClick={setCompletedStatus}
                  style={{
                    backgroundColor: orderStatus === "Completed" && "#00C49F",
                    color: orderStatus === "Completed" && "black",
                  }}
                >
                 <CheckCircleIcon />
                </button>
              </div>
            </div>
    );
}

export default Order;