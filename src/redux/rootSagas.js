import {take,takeEvery,takeLatest,put,all,delay,fork,call} from "redux-saga/effects";

import * as types from "./actionTypes";

import { loadtablesSuccess,loadtablesError} from "./actions";
import {tableApi} from "./api";


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

const userSagas=[
    fork(onLoadTables)
]

export default function *rootSaga(){
    yield all([...userSagas]);
}