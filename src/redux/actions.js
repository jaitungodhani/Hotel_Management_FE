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