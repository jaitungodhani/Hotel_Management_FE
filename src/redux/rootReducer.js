import { combineReducers } from "redux";

import {tableReducer,categoryReducer, itemReducer, orderReducer, userReducer, ManagerorderReducer} from "./reducer";

const rootReducer=combineReducers({
    user:userReducer,
    data:tableReducer,
    category:categoryReducer,
    items:itemReducer,
    orders:orderReducer,
    managerorders:ManagerorderReducer
})

export default rootReducer;