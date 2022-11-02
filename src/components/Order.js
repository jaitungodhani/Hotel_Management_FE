import React, { useEffect, useState } from "react";
import "./order.css";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { useDispatch } from "react-redux";
import { managerorderupdateStart } from "../redux/actions";

const Order=({particular_order})=>{
    const dispatch=useDispatch();
    const [orderStatus,setOrderStatus]=useState(particular_order.status);
    
    // console.log("______:-",orderStatus);
    const [callApi,setCallAPI]=useState(false);
    useEffect(()=>{
      console.log("______:-",particular_order);
      // setOrderStatus(particular_order.status);
      if(callApi){
        dispatch(managerorderupdateStart({id:particular_order.id,order_update_data:{"status":orderStatus}}));
      }
    },[orderStatus]);
    const setWaitingStatus=()=>{
        setCallAPI(true);
        setOrderStatus("Waiting");
    }
    const setProcessingStatus=()=>{
        setCallAPI(true);
        setOrderStatus("Processing");
    }
    const setCompletedStatus=()=>{
        setCallAPI(true);
        setOrderStatus("Completed");
    }
    console.log("color:-",particular_order);
    console.log("orderstatus:-",orderStatus);
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