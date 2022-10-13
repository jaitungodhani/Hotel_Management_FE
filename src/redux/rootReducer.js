import { combineReducers } from "redux";

import {tableReducer,categoryReducer} from "./reducer";

const rootReducer=combineReducers({
    data:tableReducer,
    category:categoryReducer
})

export default rootReducer;