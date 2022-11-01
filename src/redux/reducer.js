import * as types from "./actionTypes";


const initialUserState={
    user:{},
    loading:false,
    error:null
}

const initialState = {
    tables: [],
    loading: false,
    error: null
};

const initialCategoryState = {
    categories: [],
    loading: false,
    error: null
}

const initialItemState = {
    items: [],
    loading: false,
    error: null
}

const initialOrderState={
    orders:[],
    loading:false,
    error:null
}

const initialManagerOrderState={
    orders:[],
    loading:false,
    error:null
}

export const userReducer=(state=initialUserState,action)=>{
    switch(action.type){
        case types.LOGIN_START:
        case types.IS_LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case types.IS_LOGIN_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                user:action.payload
            }
        case types.IS_LOGIN_ERROR:
        case types.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_TABLES_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_TABLES_SUCCESS:
            return {
                ...state,
                loading: false,
                tables: action.payload
            }

        case types.LOAD_TABLES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};

export const categoryReducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORY_START:
            return {
                ...state,
                loading: true
            }

        case types.LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }

        case types.LOAD_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const itemReducer = (state = initialItemState, action) => {
    switch (action.type) {
        case types.LOAD_ITEM_START:
            return {
                ...state,
                loading: true
            }

        case types.LOAD_ITEM_SUCCESS:

            return {
                ...state,
                loading: false,
                items: action.payload
            }

        case types.LOAD_ITEM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const orderReducer=(state=initialOrderState,action)=>{
    switch(action.type){
        case types.LOAD_ORDER_START:
        case types.DELETE_ORDER_START:
        case types.CREATE_ORDER_START:
        case types.UPDATE_ORDER_START:
            return {
                ...state,
                loading:true
            }
        case types.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                orders:[...state.orders.concat(action.payload)]
            }
        case types.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                orders:state.orders.filter((i)=>i.id !== action.payload)
            }
        case types.LOAD_ORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                orders:action.payload
            }
        case types.UPDATE_ORDER_SUCCESS:
            const index=state.orders.findIndex((order)=>order.id===action.payload.id);
            const neworderArray=[...state.orders];
            console.log("fffff",action.payload);
            neworderArray[index]=action.payload;
            return {
                ...state,
                loading:false,
                orders:neworderArray
            }
        case types.LOAD_ORDER_ERROR:
        case types.DELETE_ORDER_ERROR:
        case types.CREATE_ORDER_ERROR:
        case types.UPDATE_ORDER_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const ManagerorderReducer=(state=initialManagerOrderState,action)=>{
    switch(action.type){
        case types.MANAGER_ORDER_START:
        case types.MANAGER_ORDER_UPDATE_START:
        case types.ORDER_FILTER_START:
            return {
                ...state,
                loading:true
            }
        case types.MANAGER_ORDER_SUCCESS:
        case types.ORDER_FILTER_SUCCESS:
            return {
                ...state,
                loading:false,
                orders:action.payload
            }
        case types.MANAGER_ORDER_UPDATE_SUCCESS:
            const index=state.orders.findIndex((order)=>order.id===action.payload.id);
            const neworderArray=[...state.orders];
            console.log("fffff",action.payload);
            neworderArray[index]=action.payload;
            return {
                ...state,
                loading:false,
                orders:neworderArray
            }
        case types.MANAGER_ORDER_ERROR:
        case types.MANAGER_ORDER_UPDATE_ERROR:
        case types.ORDER_FILTER_ERROR:
            return {
                ...state,
                loading:false,
                orders:action.error
            }
        default:
            return state
    }
}