import { combineReducers } from "redux";

import tableReducer from "./reducer";

const rootReducer=combineReducers({
    data:tableReducer
})

export default rootReducer;