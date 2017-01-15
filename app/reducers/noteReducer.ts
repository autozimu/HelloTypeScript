import { INote } from "./../models/INote";
import { IAction } from "./../actions/IAction";
import {
    CREATE_NOTE, ICreateNoteAction,
    DELETE_NOTE, IUpdateNoteAction,
    UPDATE_NOTE, IDeleteNoteAction
} from "./../actions/noteActions";

const handlers = {};
export function noteReducer(state: Array<INote> = [], action: IAction) {
    if (handlers[action.type]) {
        return handlers[action.type](state, action);
    } else {
        console.warn('no action handler found!');
        return state;
    }
}

handlers[CREATE_NOTE] = function (notes: INote[], action: ICreateNoteAction): INote[] {
    return notes.concat(action.payload);
};

handlers[UPDATE_NOTE] = function (notes: INote[], action: IUpdateNoteAction): INote[] {
    return notes.map(note => {
        if (note.id === action.payload.id) {
            note.task = action.payload.task;
        }
        return note;
    });
};

handlers[DELETE_NOTE] = function (notes: INote[], action: IDeleteNoteAction): INote[] {
    return notes.filter(note => note.id !== action.payload.id);
};
