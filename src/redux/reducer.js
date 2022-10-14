import * as types from "./actionTypes";

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

