import {IAction, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from "./actions";
import uuid = require("node-uuid");
import {INote} from "./models/INote";
import {combineReducers} from 'redux';

function notes(state: Array<INote> = [], action: IAction) {
    switch (action.type) {
        case ADD_NOTE:
            return state.concat([{
                    id: uuid.v4(),
                    task: 'New task'
                }]);
        case DELETE_NOTE:
            return state.filter(note => note.id !== action.id);
        case UPDATE_NOTE:
            return state.map(note => {
                if (note.id === action.id) {
                    note.task = action.task;
                }
                return note;
            });
        default:
            return state;
    }
}

export const AppReducer = combineReducers({
    notes
});
