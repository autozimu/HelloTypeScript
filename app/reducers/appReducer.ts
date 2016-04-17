import {combineReducers} from "redux";
import {noteReducer} from "./noteReducer";

export const appReducer = combineReducers({
    notes: noteReducer
});
