import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bill from "../components/Bill";
import { completedBillStart } from "../redux/actions";

const CompleteBill =()=>{
    
    const dispatch=useDispatch();
    const {completed_bills} = useSelector((state)=>state.completedbills);

    useEffect(()=>{
        dispatch(completedBillStart());
    },[]);
    return(
        <div>
            <Grid container sx={{mt:1}}>
                {completed_bills.map((i) => (
                <Grid i xs={12} sm={6} md={4} lg={4}>
                    <Bill bill_data={i} />
                </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default CompleteBill;