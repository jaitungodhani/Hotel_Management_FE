import { combineReducers } from "redux";

import {tableReducer,categoryReducer, itemReducer, orderReducer, userReducer} from "./reducer";

const rootReducer=combineReducers({
    user:userReducer,
    data:tableReducer,
    category:categoryReducer,
    items:itemReducer,
    orders:orderReducer
})

export default rootReducer;