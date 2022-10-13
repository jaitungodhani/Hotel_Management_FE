import * as types from "./actionTypes";

const initialState={
    tables:[],
    loading:false,
    error:null
};

const tableReducer=(state=initialState,action)=>{
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

export default tableReducer;