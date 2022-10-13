import { combineReducers } from "redux";

import {tableReducer,categoryReducer, itemReducer, orderReducer} from "./reducer";

const rootReducer=combineReducers({
    data:tableReducer,
    category:categoryReducer,
    items:itemReducer,
    orders:orderReducer
})

export default rootReducer;