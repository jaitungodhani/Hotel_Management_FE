import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";

import * as types from "./actionTypes";

import { loadtablesSuccess, loadtablesError, loadcategorySuccess, loadcategoryError, loaditemSuccess, loaditemError, loadorderError, loadorderSuccess, deleteorderError, deleteorderSuccess, createorderSuccess, updateorderError, updateorderSuccess, createorderError, loginSuccess, loginError, isloginSuccess, managerorderStart, managerorderError, managerorderSuccess, managerorderupdateSuccess, managerorderupdateError, orderFilterSuccess, orderFilterError, liveBillError, liveBillSuccess, createBillSuccess, createBillError, completedBillError, completedBillSuccess } from "./actions";
import { tableApi, categoryApi, itemsApi, orderApi, orderApidelete, orderApiPost, orderApiUpdate, signIn, isLoginApi, orderApiget, orderfilterapi, livebillapi, createbillapi, completedbillapi } from "./api";
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
            localStorage.setItem("IsLogin", true);
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


export function* onManagerUpdateOrderStartAsync({ payload: { id, order_update_data } }) {
    try {
        const response = yield call(orderApiUpdate, id, order_update_data);
        if (response.status === 200) {
            yield delay(200);
            toast.success("Update Order Successfully!!!!", { theme: "colored" });
            yield put(managerorderupdateSuccess(response.data.data));
        }
        else {
            toast.error("Error in Update Order!!!", { theme: "colored" });
            yield put(managerorderupdateError(response.data.message));
        }
    }
    catch (error) {
        yield put(managerorderupdateError(error.response.data));
    }
}

export function* onManagerUpdateOrder() {
    yield takeEvery(types.MANAGER_ORDER_UPDATE_START, onManagerUpdateOrderStartAsync)
}


export function* onFilterOrderAsync({ payload }) {
    try {
        const response = yield call(orderfilterapi, payload);
        console.log("######",response.data.data)
        if (response.status === 200) {
            yield delay(200);
            // toast.success("U Order Successfully!!!!", { theme: "colored" });
            yield put(orderFilterSuccess(response.data.data));
        }
        else {
            toast.error("Error in Update Order!!!", { theme: "colored" });
            yield put(orderFilterError(response.data.message));
        }
    }
    catch (error) {
        yield put(orderFilterError(error.response.data));
    }
}

export function* onFilterOrder() {
    yield takeEvery(types.ORDER_FILTER_START, onFilterOrderAsync)
}


export function* onLiveBillAsync() {
    try {
        const response = yield call(livebillapi);
        console.log("######",response.data.data)
        if (response.status === 200) {
            yield delay(200);
            // toast.success("U Order Successfully!!!!", { theme: "colored" });
            yield put(liveBillSuccess(response.data.data));
        }
        else {
            // toast.error("Error in Update Order!!!", { theme: "colored" });
            yield put(liveBillError(response.data.message));
        }
    }
    catch (error) {
        yield put(liveBillError(error.response.data));
    }
}

export function* onLiveBill() {
    yield takeEvery(types.GETLIVE_BILL_START, onLiveBillAsync)
}


export function* onCreateBillAsync({ payload }) {
    try {
        const response = yield call(createbillapi,payload);
        console.log("######",response.data.data)
        if (response.status === 200) {
            yield delay(200);
            toast.success("Bill Create Successfully!!!!", { theme: "colored" });
            yield put(createBillSuccess());
        }
        // else {
        //     toast.error("Error in Bill Create!!!", { theme: "colored" });
        //     yield put(createBillError(response.data.message));
        // }
    }
    catch (error) {
        toast.error(error.response.data.message, { theme: "colored" });
        yield put(createBillError(error.response.data));
    }
}

export function* onCreateBill() {
    yield takeEvery(types.CREATE_BILL_START, onCreateBillAsync)
}

export function* onCompletedBillAsync() {
    try {
        const response = yield call(completedbillapi);
        console.log("######",response.data.data)
        if (response.status === 200) {
            yield delay(200);
            // toast.success("U Order Successfully!!!!", { theme: "colored" });
            yield put(completedBillSuccess(response.data.data));
        }
        else {
            // toast.error("Error in Update Order!!!", { theme: "colored" });
            yield put(completedBillError(response.data.message));
        }
    }
    catch (error) {
        yield put(completedBillError(error.response.data));
    }
}

export function* onCompletedBill() {
    yield takeEvery(types.GETCOMPLETED_BILL_START, onCompletedBillAsync)
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
    fork(onManagerUpdateOrder),
    fork(onFilterOrder),
    fork(onLiveBill),
    fork(onCreateBill),
    fork(onCompletedBill)
]

export default function* rootSaga() {
    yield all([...userSagas]);
}