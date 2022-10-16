import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "../components/Order";
import { managerorderStart } from "../redux/actions";


const Manager = () => {
  const dispatch=useDispatch();
  const {orders} = useSelector((state)=>state.managerorders);
  useEffect(()=>{
    dispatch(managerorderStart());
  },[]);
  return (
    <div>
      <Grid container>
        {orders.map((i) => (
          <Grid i xs={12} sm={6} md={4} lg={4}>
            <Order particular_order={i} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Manager;
