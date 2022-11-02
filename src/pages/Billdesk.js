import { Grid } from "@mui/material";
import React from "react";
import Bill from "../components/Bill";

const Billdesk =()=>{
    const bills=[
        {
            "id": 1,
            "order": [
                {
                    "id": "3c757f17-f74f-4591-abfe-600046c5acc0",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 4
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 2,
                    "status": "Completed",
                    "create_at": "2022-10-17T09:42:56.541267Z",
                    "pay": false
                },
                {
                    "id": "ed95b113-88be-4f53-8489-bc403ae814bf",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 4
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 3,
                    "status": "Waiting",
                    "create_at": "2022-11-01T03:59:26.701585Z",
                    "pay": false
                },
                {
                    "id": "256953a9-3447-4a06-8b07-1d0203cfda8f",
                    "Item": {
                        "id": 9,
                        "category": {
                            "id": 5,
                            "name": "Cold drinks"
                        },
                        "name": "Thumbs up",
                        "price": 20
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 4
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 8,
                    "status": "Waiting",
                    "create_at": "2022-11-01T04:01:12.452025Z",
                    "pay": false
                },
                {
                    "id": "bd18a688-39fb-4572-9ec5-aa4ed8c9c505",
                    "Item": {
                        "id": 5,
                        "category": {
                            "id": 4,
                            "name": "chinese"
                        },
                        "name": "Manchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 4
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 4,
                    "status": "Waiting",
                    "create_at": "2022-11-01T04:01:24.540549Z",
                    "pay": false
                },
                {
                    "id": "676a0848-654f-4dd8-8cc6-555488cf57f8",
                    "Item": {
                        "id": 6,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Masala Dhosa",
                        "price": 130
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 4
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 2,
                    "status": "Waiting",
                    "create_at": "2022-11-01T04:01:40.883442Z",
                    "pay": false
                }
            ],
            "total_amount": 1150,
            "name": "T1"
        },
        {
            "id": 2,
            "order": [
                {
                    "id": "9fe8061b-4a1e-4738-97f0-82fbc18ec6c3",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 2,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 1
                            }
                        ],
                        "name": "T2"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T04:08:24.359274Z",
                    "pay": false
                }
            ],
            "total_amount": 50,
            "name": "T2"
        },
        {
            "id": 3,
            "order": [
                {
                    "id": "eaeac692-5824-4ff6-8842-b97fae0408be",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 3,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            }
                        ],
                        "name": "T3"
                    },
                    "quantity": 10,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:09:03.492053Z",
                    "pay": false
                }
            ],
            "total_amount": 500,
            "name": "T3"
        },
        {
            "id": 4,
            "order": [
                {
                    "id": "42409bd9-79d2-4441-8a3a-bfa960224278",
                    "Item": {
                        "id": 3,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Chhole-Bhature",
                        "price": 140
                    },
                    "table": {
                        "id": 4,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            }
                        ],
                        "name": "T4"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:08:24.549274Z",
                    "pay": false
                },
                {
                    "id": "d6872c6e-f5d4-4562-9a9c-a59439f2f623",
                    "Item": {
                        "id": 2,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Rajma Chawal",
                        "price": 100
                    },
                    "table": {
                        "id": 4,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            }
                        ],
                        "name": "T4"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T09:42:01.096912Z",
                    "pay": false
                }
            ],
            "total_amount": 240,
            "name": "T4"
        },
        {
            "id": 5,
            "order": [
                {
                    "id": "6591ec60-ad45-482b-a5bb-4168cd144f3b",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Panir Tikka",
                        "price": 180
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T04:08:24.392274Z",
                    "pay": false
                },
                {
                    "id": "b8a064c4-e3ff-4d54-a860-7d21f35862a1",
                    "Item": {
                        "id": 5,
                        "category": {
                            "id": 4,
                            "name": "chinese"
                        },
                        "name": "Manchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T09:54:16.912815Z",
                    "pay": false
                },
                {
                    "id": "0266823a-3d68-4e8d-bd86-107bd32c359e",
                    "Item": {
                        "id": 2,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Rajma Chawal",
                        "price": 100
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:08:24.423286Z",
                    "pay": false
                },
                {
                    "id": "42a917fc-49a9-43e8-892b-e829e02f642c",
                    "Item": {
                        "id": 6,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Masala Dhosa",
                        "price": 130
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:16:22.154582Z",
                    "pay": false
                },
                {
                    "id": "bad48ed2-1d67-4dfd-9c94-6564502b86a8",
                    "Item": {
                        "id": 8,
                        "category": {
                            "id": 5,
                            "name": "Cold drinks"
                        },
                        "name": "Mazza",
                        "price": 20
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 2,
                    "status": "Completed",
                    "create_at": "2022-10-17T10:23:16.076491Z",
                    "pay": false
                },
                {
                    "id": "76b58fda-193a-4800-92ec-4344f9efb233",
                    "Item": {
                        "id": 9,
                        "category": {
                            "id": 5,
                            "name": "Cold drinks"
                        },
                        "name": "Thumbs up",
                        "price": 20
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 2,
                    "status": "Completed",
                    "create_at": "2022-10-17T10:23:16.858973Z",
                    "pay": false
                },
                {
                    "id": "d040c162-c7de-40b6-945c-c207643b1bee",
                    "Item": {
                        "id": 6,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Masala Dhosa",
                        "price": 130
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 5
                            },
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T10:52:18.919304Z",
                    "pay": false
                }
            ],
            "total_amount": 740,
            "name": "T5"
        },
        {
            "id": 6,
            "order": [
                {
                    "id": "8e8795ec-0a2e-463c-a702-746a4f683ca4",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 6,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T6"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T04:08:24.426274Z",
                    "pay": false
                },
                {
                    "id": "70bd9a1a-f363-46d4-8c53-0438160c2b55",
                    "Item": {
                        "id": 6,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Masala Dhosa",
                        "price": 130
                    },
                    "table": {
                        "id": 6,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 2
                            }
                        ],
                        "name": "T6"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T04:08:24.329276Z",
                    "pay": false
                }
            ],
            "total_amount": 180,
            "name": "T6"
        },
        {
            "id": 7,
            "order": [
                {
                    "id": "835dad34-9434-4bed-8183-47ab29301bf8",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 7,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 4
                            }
                        ],
                        "name": "T7"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T10:17:27.228713Z",
                    "pay": false
                },
                {
                    "id": "b7825218-a878-4be2-ba10-209468267fb2",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Gujarati"
                        },
                        "name": "Khichdi",
                        "price": 50
                    },
                    "table": {
                        "id": 7,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 4
                            }
                        ],
                        "name": "T7"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:08:24.565273Z",
                    "pay": false
                },
                {
                    "id": "e30011ad-8af2-49f8-b4e7-5286772fc75f",
                    "Item": {
                        "id": 2,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Rajma Chawal",
                        "price": 100
                    },
                    "table": {
                        "id": 7,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 4
                            }
                        ],
                        "name": "T7"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:08:24.517272Z",
                    "pay": false
                },
                {
                    "id": "64f2ed3f-edc4-46f4-bab2-2bf4df65892c",
                    "Item": {
                        "id": 6,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Masala Dhosa",
                        "price": 130
                    },
                    "table": {
                        "id": 7,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 4
                            }
                        ],
                        "name": "T7"
                    },
                    "quantity": 11,
                    "status": "Completed",
                    "create_at": "2022-10-17T04:16:03.892318Z",
                    "pay": false
                }
            ],
            "total_amount": 1630,
            "name": "T7"
        },
        {
            "id": 8,
            "order": [
                {
                    "id": "53a32c68-8f05-4649-83e0-e047c20f4fe8",
                    "Item": {
                        "id": 6,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Masala Dhosa",
                        "price": 130
                    },
                    "table": {
                        "id": 8,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 3
                            }
                        ],
                        "name": "T8"
                    },
                    "quantity": 5,
                    "status": "Processing",
                    "create_at": "2022-10-17T04:09:23.830119Z",
                    "pay": false
                },
                {
                    "id": "7c05b70e-8e5c-4a19-bf49-9a0dbc6a9392",
                    "Item": {
                        "id": 3,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Chhole-Bhature",
                        "price": 140
                    },
                    "table": {
                        "id": 8,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 3
                            }
                        ],
                        "name": "T8"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T04:08:24.258272Z",
                    "pay": false
                },
                {
                    "id": "88da3d67-5518-40b8-a15a-354bf5818357",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Punjabi"
                        },
                        "name": "Panir Tikka",
                        "price": 180
                    },
                    "table": {
                        "id": 8,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 3
                            }
                        ],
                        "name": "T8"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-17T09:43:28.878715Z",
                    "pay": false
                }
            ],
            "total_amount": 970,
            "name": "T8"
        }
    ]
    return(
        <div>
            <Grid container sx={{mt:1}}>
                {bills.map((i) => (
                <Grid i xs={12} sm={6} md={4} lg={4}>
                    <Bill bill_data={i} />
                </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Billdesk;