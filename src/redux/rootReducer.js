import { combineReducers } from "redux";

import {tableReducer,categoryReducer, itemReducer} from "./reducer";

const rootReducer=combineReducers({
    data:tableReducer,
    category:categoryReducer,
    items:itemReducer,
})

export default rootReducer;