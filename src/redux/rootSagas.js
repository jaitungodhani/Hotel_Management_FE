import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";

import * as types from "./actionTypes";

import { loadtablesSuccess, loadtablesError, loadcategorySuccess, loadcategoryError, loaditemSuccess, loaditemError, loadorderError, loadorderSuccess, deleteorderError, deleteorderSuccess, createorderSuccess, updateorderError, updateorderSuccess, createorderError, loginSuccess, loginError, isloginSuccess, managerorderStart, managerorderError, managerorderSuccess } from "./actions";
import { tableApi, categoryApi, itemsApi, orderApi, orderApidelete, orderApiPost, orderApiUpdate, signIn, isLoginApi, orderApiget } from "./api";
import { toast } from "react-toastify";

export function* onLoadISLoginStartAsync() {
    try {
        const response = yield call(isLoginApi);
        console.log("response", response);
        if (response.status === 200) {
            yield delay(500);
            yield put(isloginSuccess(response.data.data))
        } 
    }
    catch (error) {
        yield put(loginError(error.response.data))
    }
}

export function* onISLoadLogin() {
    yield takeEvery(types.IS_LOGIN_START, onLoadISLoginStartAsync)
}


export function* onLoadLoginStartAsync({ payload }) {
    console.log("fdeffdfd", payload);
    try {
        const response = yield call(signIn, payload);
        console.log("response", response);
        if (response.status === 200) {
            yield delay(500);
            toast.success("Login Successfully!!!!", { theme: "colored" });
            localStorage.setItem("access_token", response.data.data.access_token);
            localStorage.setItem("refresh_token", response.data.data.refresh_token);
            yield put(loginSuccess(response.data.data.user_data))
        } 
    }
    catch (error) {
        toast.error(error.response.data.message, { theme: "colored" });
        yield put(loginError(error.response.data))
    }
}

export function* onLoadLogin() {
    yield takeEvery(types.LOGIN_START, onLoadLoginStartAsync)
}


export function* onLoadTableStartAsync() {
    try {
        const response = yield call(tableApi);
        console.log("response", response);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadtablesSuccess(response.data.data))
        }
    }
    catch (error) {
        yield put(loadtablesError(error.response.data))
    }
}

export function* onLoadTables() {
    yield takeEvery(types.LOAD_TABLES_START, onLoadTableStartAsync)
}


export function* onLoadCategoryStartAsync() {
    try {
        const response = yield call(categoryApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadcategorySuccess(response.data.data))
        }
    }
    catch (error) {
        yield put(loadcategoryError(error.response.data))
    }
}

export function* onLoadCategory() {
    yield takeEvery(types.LOAD_CATEGORY_START, onLoadCategoryStartAsync)
}

export function* onLoadItemStartAsync() {
    try {
        const response = yield call(itemsApi);
        if (response.status === 200) {
            // console.log("dfcdfddfdfd",response.data.data);
            yield delay(200);
            yield put(loaditemSuccess(response.data.data))
        }
    }
    catch (error) {
        yield put(loaditemError(error.response.data))
    }
}


export function* onLoadItem() {
    yield takeEvery(types.LOAD_ITEM_START, onLoadItemStartAsync)
}

export function* onLoadOrderStartAsync({ payload }) {
    try {
        const response = yield call(orderApi, payload)
        if (response.status === 200) {
            yield delay(200);
            yield put(loadorderSuccess(response.data.data))
        }
    }
    catch (error) {
        yield put(loadorderError(error.response.data))
    }
}

export function* onLoadOrder() {
    yield takeEvery(types.LOAD_ORDER_START, onLoadOrderStartAsync)
}

export function* onDeleteOrderStartAsync({ payload }) {
    try {
        console.log("kdsjdkjf", payload);
        const response = yield call(orderApidelete, payload)
        if (response.status === 200) {
            yield delay(200);
            toast.success("Delete Order Successfully!!!!", { theme: "colored" });
            yield put(deleteorderSuccess(payload));
        }
        else {
            toast.error("Error in Order Delete!!!", { theme: "colored" });
            yield put(deleteorderError(response.data.message));
        }
    }
    catch (error) {
        yield put(deleteorderError(error.response.data));
    }
}


export function* onDeleteOrder() {
    yield takeEvery(types.DELETE_ORDER_START, onDeleteOrderStartAsync)
}

export function* onCreateOrderStartAsync({ payload }) {
    try {
        const response = yield call(orderApiPost, payload);
        if (response.status === 200) {
            yield delay(200);
            toast.success("Create Order Successfully!!!!", { theme: "colored" });
            yield put(createorderSuccess(response.data.data));
        }
        else {
            toast.error("Error in Create Order!!!", { theme: "colored" });
            yield put(createorderError(response.data.message));
        }
    }
    catch (error) {
        yield put(createorderError(error.response.data));
    }
}


export function* onCreateOrder() {
    yield takeEvery(types.CREATE_ORDER_START, onCreateOrderStartAsync)
}

export function* onUpdateOrderStartAsync({ payload: { id, order_update_data } }) {
    try {
        const response = yield call(orderApiUpdate, id, order_update_data);
        if (response.status === 200) {
            yield delay(200);
            toast.success("Update Order Successfully!!!!", { theme: "colored" });
            yield put(updateorderSuccess(response.data.data));
        }
        else {
            toast.error("Error in Update Order!!!", { theme: "colored" });
            yield put(updateorderError(response.data.message));
        }
    }
    catch (error) {
        yield put(updateorderError(error.response.data));
    }
}


export function* onUpdateOrder() {
    yield takeEvery(types.UPDATE_ORDER_START, onUpdateOrderStartAsync)
}

export function* onManagerOrderStartAsync() {
    try {
        const response = yield call(orderApiget);
        if (response.status === 200) {
            yield delay(200);
            // toast.success("Update Order Successfully!!!!", { theme: "colored" });
            yield put(managerorderSuccess(response.data.data));
        }
        else {
            // toast.error("Error in Update Order!!!", { theme: "colored" });
            yield put(managerorderError(response.data.message));
        }
    }
    catch (error) {
        yield put(managerorderError(error.response.data));
    }
}


export function* onManagerOrder() {
    yield takeEvery(types.MANAGER_ORDER_START, onManagerOrderStartAsync)
}

const userSagas = [
    fork(onISLoadLogin),
    fork(onLoadLogin),
    fork(onLoadTables),
    fork(onLoadCategory),
    fork(onLoadItem),
    fork(onLoadOrder),
    fork(onDeleteOrder),
    fork(onCreateOrder),
    fork(onUpdateOrder),
    fork(onManagerOrder),
]

export default function* rootSaga() {
    yield all([...userSagas]);
}