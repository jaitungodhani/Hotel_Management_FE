import {take,takeEvery,takeLatest,put,all,delay,fork,call} from "redux-saga/effects";

import * as types from "./actionTypes";

import { loadtablesSuccess,loadtablesError, loadcategorySuccess, loadcategoryError, loaditemSuccess, loaditemError, loadorderError, loadorderSuccess} from "./actions";
import {tableApi,categoryApi, itemsApi, orderApi} from "./api";


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

export function* onLoadOrderStartAsync(order_id){
    try{
        console.log(";;;;;;",order_id);
        const response=yield call(orderApi,order_id)
        console.log("ggggg",response);
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
    while(true){
        const {payload:order_id}=yield take(types.LOAD_ORDER_START);
        yield call(onLoadOrderStartAsync,order_id);
    }

    // yield takeEvery(types.LOAD_ORDER_START,call(onLoadOrderStartAsync,order_id))
}
const userSagas=[
    fork(onLoadTables),
    fork(onLoadCategory),
    fork(onLoadItem),
    fork(onLoadOrder)
]

export default function *rootSaga(){
    yield all([...userSagas]);
}