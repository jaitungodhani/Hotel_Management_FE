import { Grid } from "@mui/material";
import React from "react";
import Bill from "../components/Bill";

const Billdesk =()=>{
    const bills=[
        {
            "id": 1,
            "order": [
                {
                    "id": "b09debe5-3681-4fbf-b8fa-6972a3a34645",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 2,
                    "status": "Waiting",
                    "create_at": "2022-10-10T16:10:04.014241Z",
                    "pay": false
                },
                {
                    "id": "be89ad71-9886-43f1-bd0e-931550295a74",
                    "Item": {
                        "id": 2,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Soft Paper",
                        "price": 45
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 2,
                    "status": "Completed",
                    "create_at": "2022-10-27T10:12:01.097322Z",
                    "pay": false
                },
                {
                    "id": "ff69af75-a27a-4d94-8cb8-2e3ebf1813a9",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-27T09:23:42.238892Z",
                    "pay": false
                },
                {
                    "id": "1472e813-6ab4-49a7-9375-33d0bf7ceffc",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 1,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T1"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-27T09:32:25.344690Z",
                    "pay": false
                }
            ],
            "total_amount": 600,
            "name": "T1"
        },
        {
            "id": 2,
            "order": [
                {
                    "id": "3ac6c4c7-1e8b-408c-94f8-6f48b4e45997",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 2,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T2"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-15T17:02:33.903336Z",
                    "pay": false
                },
                {
                    "id": "a28460e8-cd56-4e23-a955-c4c0fe5e9181",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 2,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T2"
                    },
                    "quantity": 1,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:00:49.945626Z",
                    "pay": false
                }
            ],
            "total_amount": 270,
            "name": "T2"
        },
        {
            "id": 3,
            "order": [
                {
                    "id": "bccad594-5229-4ee7-8383-a20479420dd7",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 3,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T3"
                    },
                    "quantity": 2,
                    "status": "Completed",
                    "create_at": "2022-10-15T17:02:33.909382Z",
                    "pay": false
                },
                {
                    "id": "e4bc7c75-85b5-4a22-80f8-f229dbcfba2f",
                    "Item": {
                        "id": 5,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Idli Sambhar",
                        "price": 40
                    },
                    "table": {
                        "id": 3,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T3"
                    },
                    "quantity": 1,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:00:59.811429Z",
                    "pay": false
                }
            ],
            "total_amount": 280,
            "name": "T3"
        },
        {
            "id": 4,
            "order": [
                {
                    "id": "6d2a93a3-b448-4b5f-be8d-3676dd6fc5a8",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 4,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T4"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-27T09:44:45.497231Z",
                    "pay": false
                },
                {
                    "id": "ef851ce9-3c0e-47b3-9480-64b4ff2cacff",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 4,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T4"
                    },
                    "quantity": 1,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:12:32.697355Z",
                    "pay": false
                }
            ],
            "total_amount": 270,
            "name": "T4"
        },
        {
            "id": 5,
            "order": [
                {
                    "id": "2e1edef0-84af-4820-af5a-523be8e8a1ae",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-15T17:02:33.915003Z",
                    "pay": false
                },
                {
                    "id": "90e04d69-64f3-4f14-a223-7b05602677be",
                    "Item": {
                        "id": 3,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "paper",
                        "price": 60
                    },
                    "table": {
                        "id": 5,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T5"
                    },
                    "quantity": 5,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:15:16.094533Z",
                    "pay": false
                }
            ],
            "total_amount": 450,
            "name": "T5"
        },
        {
            "id": 6,
            "order": [
                {
                    "id": "cc3a0545-f9cb-4c16-8b1b-5d022aa06049",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 6,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T6"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-15T17:02:33.920438Z",
                    "pay": false
                },
                {
                    "id": "edeeb13b-f1d2-4676-9d93-5014dd080dfb",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 6,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T6"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-15T17:02:33.917648Z",
                    "pay": false
                },
                {
                    "id": "adfa976e-065c-41c9-b72c-92c8154407b0",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 6,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T6"
                    },
                    "quantity": 1,
                    "status": "Completed",
                    "create_at": "2022-10-15T17:02:33.923291Z",
                    "pay": false
                },
                {
                    "id": "52614d06-eb9e-4006-89d8-232aa2499c35",
                    "Item": {
                        "id": 2,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Soft Paper",
                        "price": 45
                    },
                    "table": {
                        "id": 6,
                        "order_status": [
                            {
                                "status": "Completed",
                                "value": 2
                            },
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T6"
                    },
                    "quantity": 2,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:14:21.880413Z",
                    "pay": false
                }
            ],
            "total_amount": 480,
            "name": "T6"
        },
        {
            "id": 7,
            "order": [
                {
                    "id": "75e60020-144b-4072-8aac-987171856828",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 7,
                        "order_status": [
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T7"
                    },
                    "quantity": 1,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:17:33.488618Z",
                    "pay": false
                }
            ],
            "total_amount": 120,
            "name": "T7"
        },
        {
            "id": 8,
            "order": [
                {
                    "id": "a3de9a5a-c446-4b53-b2d5-542014b475dd",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 8,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 2
                            }
                        ],
                        "name": "T8"
                    },
                    "quantity": 1,
                    "status": "Processing",
                    "create_at": "2022-10-15T17:02:33.925793Z",
                    "pay": false
                },
                {
                    "id": "7e365d43-13d3-4e68-9231-9c8fd2f37beb",
                    "Item": {
                        "id": 3,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "paper",
                        "price": 60
                    },
                    "table": {
                        "id": 8,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 2
                            }
                        ],
                        "name": "T8"
                    },
                    "quantity": 5,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:13:53.723910Z",
                    "pay": false
                },
                {
                    "id": "cb33de6a-08de-4bcd-9e80-9dd704a0cf4b",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 8,
                        "order_status": [
                            {
                                "status": "Processing",
                                "value": 1
                            },
                            {
                                "status": "Waiting",
                                "value": 2
                            }
                        ],
                        "name": "T8"
                    },
                    "quantity": 1,
                    "status": "Waiting",
                    "create_at": "2022-10-16T05:28:26.785956Z",
                    "pay": false
                }
            ],
            "total_amount": 570,
            "name": "T8"
        },
        {
            "id": 9,
            "order": [
                {
                    "id": "0bf197c7-5f1f-4b70-9fd0-e09f6f27db74",
                    "Item": {
                        "id": 1,
                        "category": {
                            "id": 1,
                            "name": "Punjabi"
                        },
                        "name": "Manuchurian",
                        "price": 120
                    },
                    "table": {
                        "id": 9,
                        "order_status": [
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T9"
                    },
                    "quantity": 3,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:16:55.294560Z",
                    "pay": false
                }
            ],
            "total_amount": 360,
            "name": "T9"
        },
        {
            "id": 10,
            "order": [
                {
                    "id": "b45edae2-e0b7-4bff-aa51-84c4b118a74d",
                    "Item": {
                        "id": 4,
                        "category": {
                            "id": 2,
                            "name": "Gujarati"
                        },
                        "name": "Kathi Khichdi",
                        "price": 150
                    },
                    "table": {
                        "id": 10,
                        "order_status": [
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T10"
                    },
                    "quantity": 4,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:17:54.628700Z",
                    "pay": false
                }
            ],
            "total_amount": 600,
            "name": "T10"
        },
        {
            "id": 11,
            "order": [
                {
                    "id": "57251227-2966-4d10-a337-b2c577c0cbbd",
                    "Item": {
                        "id": 5,
                        "category": {
                            "id": 3,
                            "name": "South Indian"
                        },
                        "name": "Idli Sambhar",
                        "price": 40
                    },
                    "table": {
                        "id": 11,
                        "order_status": [
                            {
                                "status": "Waiting",
                                "value": 1
                            }
                        ],
                        "name": "T11"
                    },
                    "quantity": 8,
                    "status": "Waiting",
                    "create_at": "2022-10-15T17:17:10.763784Z",
                    "pay": false
                }
            ],
            "total_amount": 320,
            "name": "T11"
        }
    ]
    return(
        <div>
            <Grid container sx={{mt:9}}>
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