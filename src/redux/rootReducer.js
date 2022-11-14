import { combineReducers } from "redux"
import { operationsReducers } from "./reducers/operations"
export const rootReducer = combineReducers({
    operationsReducers,
})