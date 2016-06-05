import {handleActions} from "redux-actions";
import {INote} from "./../models/INote";
import {
    CREATE_NOTE, ICreateNoteAction,
    DELETE_NOTE, IUpdateNoteAction,
    UPDATE_NOTE, IDeleteNoteAction
} from "./../actions/noteActions";

export const noteReducer = handleActions({
    [CREATE_NOTE]: function (notes: INote[], action: ICreateNoteAction): INote[] {
        return notes.concat(action.payload);
    },

    [UPDATE_NOTE]: function (notes: INote[], action: IUpdateNoteAction): INote[] {
        return notes.map(note => {
            if (note.id === action.payload.id) {
                note.task = action.payload.task;
            }
            return note;
        });
    },

    [DELETE_NOTE]: function (notes: INote[], action: IDeleteNoteAction): INote[] {
        return notes.filter(note => note.id !== action.payload.id);
    },
}, []);
