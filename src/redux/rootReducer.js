import { combineReducers } from "redux";

import {tableReducer,categoryReducer, itemReducer, orderReducer, userReducer, ManagerorderReducer, ManageLiveBills, ManageCompletedBills} from "./reducer";

const rootReducer=combineReducers({
    user:userReducer,
    data:tableReducer,
    category:categoryReducer,
    items:itemReducer,
    orders:orderReducer,
    managerorders:ManagerorderReducer,
    livebills:ManageLiveBills,
    completedbills:ManageCompletedBills
})

export default rootReducer;