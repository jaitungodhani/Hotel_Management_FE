import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bill from "../components/Bill";
import { liveBillStart } from "../redux/actions";

const Billdesk =()=>{
    const dispatch=useDispatch();
    const {bills} = useSelector((state)=>state.livebills);

    useEffect(()=>{
        dispatch(liveBillStart());
    },[]);
    return(
        <div>
            <Grid container sx={{mt:1}}>
                {bills.map((i) => (
                <Grid i xs={12} sm={6} md={4} lg={4}>
                    <Bill bill_data={i} type="live" />
                </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Billdesk;