import {take,takeEvery,takeLatest,put,all,delay,fork,call} from "redux-saga/effects";

import * as types from "./actionTypes";

import { loadtablesSuccess,loadtablesError, loadcategorySuccess, loadcategoryError} from "./actions";
import {tableApi,categoryApi} from "./api";


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

const userSagas=[
    fork(onLoadTables),
    fork(onLoadCategory)
]

export default function *rootSaga(){
    yield all([...userSagas]);
}