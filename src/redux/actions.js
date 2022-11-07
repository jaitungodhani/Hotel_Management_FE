import * as types from "./actionTypes";

export const loginStart=(payload)=>({
    type:types.LOGIN_START,
    payload:payload
});

export const loginSuccess=(payload)=>({
    type:types.LOGIN_SUCCESS,
    payload:payload
});

export const loginError=(error)=>({
    type:types.LOGIN_ERROR,
    payload:error
});

export const isloginStart=()=>({
    type:types.IS_LOGIN_START
});

export const isloginSuccess=(payload)=>({
    type:types.IS_LOGIN_SUCCESS,
    payload:payload
});

export const isloginError=(error)=>({
    type:types.IS_LOGIN_ERROR,
    payload:error
});

export const loadtablesStart=()=>({
    type:types.LOAD_TABLES_START,
});

export const loadtablesSuccess=(tables)=>({
    type:types.LOAD_TABLES_SUCCESS,
    payload:tables
});

export const loadtablesError=(error)=>({
    type:types.LOAD_TABLES_ERROR,
    payload:error
});

export const loadcategoryStart=()=>({
    type:types.LOAD_CATEGORY_START
});

export const loadcategorySuccess=(categories)=>({
    type:types.LOAD_CATEGORY_SUCCESS,
    payload:categories
});

export const loadcategoryError=(error)=>({
    type:types.LOAD_CATEGORY_ERROR,
    payload:error
});

export const loaditemStart=()=>({
    type:types.LOAD_ITEM_START
})

export const loaditemSuccess=(items)=>({
    type:types.LOAD_ITEM_SUCCESS,
    payload:items
});

export const loaditemError=(error)=>({
    type:types.LOAD_ITEM_ERROR,
    payload:error
});

export const loadorderStart=(table_id)=>({
    type:types.LOAD_ORDER_START,
    payload:table_id
});

export const loadorderSuccess=(orders)=>({
    type:types.LOAD_ORDER_SUCCESS,
    payload:orders
});

export const loadorderError=(error)=>({
    type:types.LOAD_ORDER_ERROR,
    payload:error
})

export const deleteorderStart=(order_id)=>({
    type:types.DELETE_ORDER_START,
    payload:order_id
});

export const deleteorderSuccess=(order_id)=>({
    type:types.DELETE_ORDER_SUCCESS,
    payload:order_id
});

export const deleteorderError=(error)=>({
    type:types.DELETE_ORDER_ERROR,
    payload:error
})

export const createorderStart=(new_order_data)=>({
    type:types.CREATE_ORDER_START,
    payload:new_order_data
});

export const createorderSuccess=(new_order_data)=>({
    type:types.CREATE_ORDER_SUCCESS,
    payload:new_order_data
});

export const createorderError=(error)=>({
    type:types.CREATE_ORDER_ERROR,
    payload:error
})

export const updateorderStart=(order_data)=>({
    type:types.UPDATE_ORDER_START,
    payload:order_data
});

export const updateorderSuccess=(order_data)=>({
    type:types.UPDATE_ORDER_SUCCESS,
    payload:order_data
});

export const updateorderError=(error)=>({
    type:types.UPDATE_ORDER_ERROR,
    payload:error
});

export const managerorderStart=()=>({
    type:types.MANAGER_ORDER_START
});

export const managerorderSuccess=(order_data)=>({
    type:types.MANAGER_ORDER_SUCCESS,
    payload:order_data
});

export const managerorderError=(error)=>({
    type:types.MANAGER_ORDER_ERROR,
    payload:error
})

export const managerorderupdateStart=(order_data)=>({
    type:types.MANAGER_ORDER_UPDATE_START,
    payload:order_data
});

export const managerorderupdateSuccess=(order_data)=>({
    type:types.MANAGER_ORDER_UPDATE_SUCCESS,
    payload:order_data
});

export const managerorderupdateError=(error)=>({
    type:types.MANAGER_ORDER_UPDATE_ERROR,
    payload:error
})

export const orderFilterStart=(payload)=>({
    type:types.ORDER_FILTER_START,
    payload:payload,
})

export const orderFilterSuccess=(order_data)=>({
    type:types.ORDER_FILTER_SUCCESS,
    payload:order_data
});

export const orderFilterError=(error)=>({
    type:types.ORDER_FILTER_ERROR,
    payload:error
})

export const liveBillStart=()=>({
    type:types.GETLIVE_BILL_START
})

export const liveBillSuccess=(livebill)=>({
    type:types.GETLIVE_BILL_SUCCESS,
    payload:livebill
})

export const liveBillError=(error)=>({
    type:types.GETLIVE_BILL_SUCCESS,
    payload:error
})

export const createBillStart=(new_bill_data)=>({
    type:types.CREATE_BILL_START,
    payload:new_bill_data
})

export const createBillSuccess=()=>({
    type:types.CREATE_BILL_SUCCESS
})

export const createBillError=(error)=>({
    type:types.CREATE_BILL_ERROR,
    payload:error
})

export const completedBillStart=()=>({
    type:types.GETCOMPLETED_BILL_START
})

export const completedBillSuccess=(completed_bills)=>({
    type:types.GETCOMPLETED_BILL_SUCCESS,
    payload:completed_bills
})

export const completedBillError=(error)=>({
    type:types.GETCOMPLETED_BILL_ERROR,
    payload:error
})