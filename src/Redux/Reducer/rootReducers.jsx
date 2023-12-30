import { combineReducers } from "redux";
import { operationsReducer } from "../todoApp/reducers/Operations";

export const RootReducer = combineReducers({
    operationsReducer,
})