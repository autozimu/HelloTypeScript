import {INote} from "./../models/INote";
import {INoteAction, CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE} from "./../actions/noteActions";

export function noteReducer(notes: Array<INote> = [], action: INoteAction) {
    switch (action.type) {
        case CREATE_NOTE:
            return notes.concat([action.note]);
        case DELETE_NOTE:
            return notes.filter(note => note.id !== action.note.id);
        case UPDATE_NOTE:
            return notes.map(note => {
                if (note.id === action.note.id) {
                    note.task = action.note.task;
                }
                return note;
            });
        default:
            return notes;
    }
}

