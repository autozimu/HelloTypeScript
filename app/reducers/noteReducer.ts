import {INote} from "./../models/INote";
import {
    CREATE_NOTE, ICreateNoteAction,
    DELETE_NOTE, IUpdateNoteAction,
    UPDATE_NOTE, IDeleteNoteAction
} from "./../actions/noteActions";
import {handleActions} from "redux-actions";

export const noteReducer = handleActions({
    [CREATE_NOTE]: (notes: Array<INote>, action: ICreateNoteAction) => (
        notes.concat(action.payload)
    ),
    
    [UPDATE_NOTE]: (notes: Array<INote>, action: IUpdateNoteAction) => (
        notes.map(note => {
            if (note.id === action.payload.id) {
                note.task = action.payload.task;
            }
            return note;
        })
    ),
    
    [DELETE_NOTE]: (notes: Array<INote>, action: IDeleteNoteAction) => (
        notes.filter(note => note.id !== action.payload.id)
    ),
}, []);
