import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bill from "../components/Bill";
import { completedBillStart } from "../redux/actions";

const CompleteBill =()=>{
    // const bills=[
    //     {
    //         "id": 1,
    //         "order": [
    //             {
    //                 "id": "3c757f17-f74f-4591-abfe-600046c5acc0",
    //                 "Item": {
    //                     "id": 1,
    //                     "category": {
    //                         "id": 1,
    //                         "name": "Gujarati"
    //                     },
    //                     "name": "Khichdi",
    //                     "price": 50
    //                 },
    //                 "table": {
    //                     "id": 1,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Waiting",
    //                             "value": 4
    //                         }
    //                     ],
    //                     "name": "T1"
    //                 },
    //                 "quantity": 2,
    //                 "status": "Completed",
    //                 "create_at": "2022-10-17T09:42:56.541267Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "ed95b113-88be-4f53-8489-bc403ae814bf",
    //                 "Item": {
    //                     "id": 1,
    //                     "category": {
    //                         "id": 1,
    //                         "name": "Gujarati"
    //                     },
    //                     "name": "Khichdi",
    //                     "price": 50
    //                 },
    //                 "table": {
    //                     "id": 1,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Waiting",
    //                             "value": 4
    //                         }
    //                     ],
    //                     "name": "T1"
    //                 },
    //                 "quantity": 3,
    //                 "status": "Waiting",
    //                 "create_at": "2022-11-01T03:59:26.701585Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "256953a9-3447-4a06-8b07-1d0203cfda8f",
    //                 "Item": {
    //                     "id": 9,
    //                     "category": {
    //                         "id": 5,
    //                         "name": "Cold drinks"
    //                     },
    //                     "name": "Thumbs up",
    //                     "price": 20
    //                 },
    //                 "table": {
    //                     "id": 1,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Waiting",
    //                             "value": 4
    //                         }
    //                     ],
    //                     "name": "T1"
    //                 },
    //                 "quantity": 8,
    //                 "status": "Waiting",
    //                 "create_at": "2022-11-01T04:01:12.452025Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "bd18a688-39fb-4572-9ec5-aa4ed8c9c505",
    //                 "Item": {
    //                     "id": 5,
    //                     "category": {
    //                         "id": 4,
    //                         "name": "chinese"
    //                     },
    //                     "name": "Manchurian",
    //                     "price": 120
    //                 },
    //                 "table": {
    //                     "id": 1,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Waiting",
    //                             "value": 4
    //                         }
    //                     ],
    //                     "name": "T1"
    //                 },
    //                 "quantity": 4,
    //                 "status": "Waiting",
    //                 "create_at": "2022-11-01T04:01:24.540549Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "676a0848-654f-4dd8-8cc6-555488cf57f8",
    //                 "Item": {
    //                     "id": 6,
    //                     "category": {
    //                         "id": 3,
    //                         "name": "South Indian"
    //                     },
    //                     "name": "Masala Dhosa",
    //                     "price": 130
    //                 },
    //                 "table": {
    //                     "id": 1,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Waiting",
    //                             "value": 4
    //                         }
    //                     ],
    //                     "name": "T1"
    //                 },
    //                 "quantity": 2,
    //                 "status": "Waiting",
    //                 "create_at": "2022-11-01T04:01:40.883442Z",
    //                 "pay": false
    //             }
    //         ],
    //         "total_amount": 1150,
    //         "name": "T1"
    //     },
    //     {
    //         "id": 2,
    //         "order": [
    //             {
    //                 "id": "9fe8061b-4a1e-4738-97f0-82fbc18ec6c3",
    //                 "Item": {
    //                     "id": 1,
    //                     "category": {
    //                         "id": 1,
    //                         "name": "Gujarati"
    //                     },
    //                     "name": "Khichdi",
    //                     "price": 50
    //                 },
    //                 "table": {
    //                     "id": 2,
    //                     "order_status": [
    //                         {
    //                             "status": "Processing",
    //                             "value": 1
    //                         }
    //                     ],
    //                     "name": "T2"
    //                 },
    //                 "quantity": 1,
    //                 "status": "Processing",
    //                 "create_at": "2022-10-17T04:08:24.359274Z",
    //                 "pay": false
    //             }
    //         ],
    //         "total_amount": 50,
    //         "name": "T2"
    //     },
    //     {
    //         "id": 3,
    //         "order": [
    //             {
    //                 "id": "eaeac692-5824-4ff6-8842-b97fae0408be",
    //                 "Item": {
    //                     "id": 1,
    //                     "category": {
    //                         "id": 1,
    //                         "name": "Gujarati"
    //                     },
    //                     "name": "Khichdi",
    //                     "price": 50
    //                 },
    //                 "table": {
    //                     "id": 3,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         }
    //                     ],
    //                     "name": "T3"
    //                 },
    //                 "quantity": 10,
    //                 "status": "Completed",
    //                 "create_at": "2022-10-17T04:09:03.492053Z",
    //                 "pay": false
    //             }
    //         ],
    //         "total_amount": 500,
    //         "name": "T3"
    //     },
    //     {
    //         "id": 4,
    //         "order": [
    //             {
    //                 "id": "42409bd9-79d2-4441-8a3a-bfa960224278",
    //                 "Item": {
    //                     "id": 3,
    //                     "category": {
    //                         "id": 2,
    //                         "name": "Punjabi"
    //                     },
    //                     "name": "Chhole-Bhature",
    //                     "price": 140
    //                 },
    //                 "table": {
    //                     "id": 4,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Processing",
    //                             "value": 1
    //                         }
    //                     ],
    //                     "name": "T4"
    //                 },
    //                 "quantity": 1,
    //                 "status": "Completed",
    //                 "create_at": "2022-10-17T04:08:24.549274Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "d6872c6e-f5d4-4562-9a9c-a59439f2f623",
    //                 "Item": {
    //                     "id": 2,
    //                     "category": {
    //                         "id": 2,
    //                         "name": "Punjabi"
    //                     },
    //                     "name": "Rajma Chawal",
    //                     "price": 100
    //                 },
    //                 "table": {
    //                     "id": 4,
    //                     "order_status": [
    //                         {
    //                             "status": "Completed",
    //                             "value": 1
    //                         },
    //                         {
    //                             "status": "Processing",
    //                             "value": 1
    //                         }
    //                     ],
    //                     "name": "T4"
    //                 },
    //                 "quantity": 1,
    //                 "status": "Processing",
    //                 "create_at": "2022-10-17T09:42:01.096912Z",
    //                 "pay": false
    //             }
    //         ],
    //         "total_amount": 240,
    //         "name": "T4"
    //     },
    //     {
    //         "id": 8,
    //         "order": [
    //             {
    //                 "id": "53a32c68-8f05-4649-83e0-e047c20f4fe8",
    //                 "Item": {
    //                     "id": 6,
    //                     "category": {
    //                         "id": 3,
    //                         "name": "South Indian"
    //                     },
    //                     "name": "Masala Dhosa",
    //                     "price": 130
    //                 },
    //                 "table": {
    //                     "id": 8,
    //                     "order_status": [
    //                         {
    //                             "status": "Processing",
    //                             "value": 3
    //                         }
    //                     ],
    //                     "name": "T8"
    //                 },
    //                 "quantity": 5,
    //                 "status": "Processing",
    //                 "create_at": "2022-10-17T04:09:23.830119Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "7c05b70e-8e5c-4a19-bf49-9a0dbc6a9392",
    //                 "Item": {
    //                     "id": 3,
    //                     "category": {
    //                         "id": 2,
    //                         "name": "Punjabi"
    //                     },
    //                     "name": "Chhole-Bhature",
    //                     "price": 140
    //                 },
    //                 "table": {
    //                     "id": 8,
    //                     "order_status": [
    //                         {
    //                             "status": "Processing",
    //                             "value": 3
    //                         }
    //                     ],
    //                     "name": "T8"
    //                 },
    //                 "quantity": 1,
    //                 "status": "Processing",
    //                 "create_at": "2022-10-17T04:08:24.258272Z",
    //                 "pay": false
    //             },
    //             {
    //                 "id": "88da3d67-5518-40b8-a15a-354bf5818357",
    //                 "Item": {
    //                     "id": 4,
    //                     "category": {
    //                         "id": 2,
    //                         "name": "Punjabi"
    //                     },
    //                     "name": "Panir Tikka",
    //                     "price": 180
    //                 },
    //                 "table": {
    //                     "id": 8,
    //                     "order_status": [
    //                         {
    //                             "status": "Processing",
    //                             "value": 3
    //                         }
    //                     ],
    //                     "name": "T8"
    //                 },
    //                 "quantity": 1,
    //                 "status": "Processing",
    //                 "create_at": "2022-10-17T09:43:28.878715Z",
    //                 "pay": false
    //             }
    //         ],
    //         "total_amount": 970,
    //         "name": "T8"
    //     }
    // ]
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