import * as types from "./actionTypes";

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