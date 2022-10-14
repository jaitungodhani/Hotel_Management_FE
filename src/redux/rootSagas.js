import {take,takeEvery,takeLatest,put,all,delay,fork,call} from "redux-saga/effects";

import * as types from "./actionTypes";

import { loadtablesSuccess,loadtablesError, loadcategorySuccess, loadcategoryError, loaditemSuccess, loaditemError, loadorderError, loadorderSuccess, deleteorderStart, deleteorderError, deleteorderSuccess, createorderSuccess, updateorderError, updateorderSuccess, createorderError} from "./actions";
import {tableApi,categoryApi, itemsApi, orderApi, orderApidelete, orderApiPost, orderApiUpdate} from "./api";


export function* onLoadTableStartAsync(){
    try {
        const response=yield call(tableApi);
        console.log("response",response);
        if(response.status===200){
            yield delay(500);
            yield put(loadtablesSuccess(response.data.data))
        }
    }
    catch(error){
        yield put(loadtablesError(error.response.data))
    }
}

export function* onLoadTables(){
    yield takeEvery(types.LOAD_TABLES_START,onLoadTableStartAsync)
}


export function* onLoadCategoryStartAsync(){
    try{
        const response=yield call(categoryApi);
        if(response.status===200)
        {
            yield delay(500);
            yield put(loadcategorySuccess(response.data.data))
        }
    }
    catch(error)
    {
        yield put(loadcategoryError(error.response.data))
    }
}

export function* onLoadCategory(){
    yield takeEvery(types.LOAD_CATEGORY_START,onLoadCategoryStartAsync)
}

export function* onLoadItemStartAsync(){
    try{
        const response= yield call(itemsApi);
        if(response.status===200){
            // console.log("dfcdfddfdfd",response.data.data);
            yield delay(200);
            yield put(loaditemSuccess(response.data.data))
        }
    }
    catch(error){
        yield put(loaditemError(error.response.data))
    }
}


export function* onLoadItem(){
    yield takeEvery(types.LOAD_ITEM_START,onLoadItemStartAsync)
}

export function* onLoadOrderStartAsync({payload}){
    try{
        const response=yield call(orderApi,payload)
        if(response.status===200){
            yield delay(200);
            yield put(loadorderSuccess(response.data.data))
        }
    }
    catch(error)
    {
        yield put(loadorderError(error.response.data))
    }
}

export function* onLoadOrder(){
    yield takeEvery(types.LOAD_ORDER_START,onLoadOrderStartAsync)
}

export function* onDeleteOrderStartAsync({payload}){
    try{
        console.log("kdsjdkjf",payload);
        const response=yield call(orderApidelete,payload)
        if(response.status===200){
            yield delay(200);
            yield put(deleteorderSuccess(payload));
        }
    }
    catch(error){
        yield put(deleteorderError(error.response.data));
    }
}


export function* onDeleteOrder(){
    yield takeEvery(types.DELETE_ORDER_START,onDeleteOrderStartAsync)
}

export function* onCreateOrderStartAsync({payload}){
    try{
        const response=yield call(orderApiPost,payload);
        if(response.status===200){
            yield delay(200);
            console.log("mmmmmmm",response.data.data);
            yield put(createorderSuccess(response.data.data));
        }
    }
    catch(error){
        yield put(createorderError(error.response.data));
    }
}


export function* onCreateOrder(){
    yield takeEvery(types.CREATE_ORDER_START,onCreateOrderStartAsync)
}

export function* onUpdateOrderStartAsync({payload:{id,order_update_data}}){
    try{
        const response=yield call(orderApiUpdate,id,order_update_data);
        if(response.status===200){
            yield delay(200);
            console.log("mmmmmmm",response.data.data);
            yield put(updateorderSuccess(response.data.data));
        }
    }
    catch(error){
        yield put(updateorderError(error.response.data));
    }
}


export function* onUpdateOrder(){
    yield takeEvery(types.UPDATE_ORDER_START,onUpdateOrderStartAsync)
}

const userSagas=[
    fork(onLoadTables),
    fork(onLoadCategory),
    fork(onLoadItem),
    fork(onLoadOrder),
    fork(onDeleteOrder),
    fork(onCreateOrder),
    fork(onUpdateOrder)
]

export default function *rootSaga(){
    yield all([...userSagas]);
}