import * as types from "./actionTypes";

const initialState={
    tables:[],
    loading:false,
    error:null
};

const initialCategoryState={
    categories:[],
    loading:false,
    error:null
}

export const tableReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LOAD_TABLES_START:
            return {
                ...state,
                loading:true
            }
        case types.LOAD_TABLES_SUCCESS:
            return {
                ...state,
                loading:false,
                tables:action.payload
            }

        case types.LOAD_TABLES_ERROR:
            return {
                ...state,
                loading:false,
                error:action.error
            }
        default:
            return state
    }
};

export const categoryReducer=(state=initialCategoryState,action)=>{
    switch(action.type){
        case types.LOAD_CATEGORY_START:
            return {
                ...state,
                loading:true
            }

        case types.LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading:false,
                categories:action.payload
            }

        case types.LOAD_CATEGORY_ERROR:
            return {
                ...state,
                loading:false,
                error:action.error
            }
        default:
            return state
    }
}