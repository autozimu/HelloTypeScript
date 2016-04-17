import {combineReducers} from "redux";
import {noteReducer} from "./noteReducer";
import {laneReducer} from "./laneReducer";

export const appReducer = combineReducers({
    notes: noteReducer,
    lanes: laneReducer
});
