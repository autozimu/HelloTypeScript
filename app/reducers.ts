import {IAction, CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE} from "./actions";
import uuid = require("node-uuid");
import {INote} from "./models/INote";
import {combineReducers} from 'redux';

function notesReducer(notes: Array<INote> = [], action: IAction) {
    switch (action.type) {
        case CREATE_NOTE:
            return notes.concat([{
                    id: uuid.v4(),
                    task: 'New task'
                }]);
        case DELETE_NOTE:
            return notes.filter(note => note.id !== action.id);
        case UPDATE_NOTE:
            return notes.map(note => {
                if (note.id === action.id) {
                    note.task = action.task;
                }
                return note;
            });
        default:
            return notes;
    }
}

export const AppReducer = combineReducers({
    notes: notesReducer
});
