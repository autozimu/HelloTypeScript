import * as uuid from "node-uuid";
import {INote} from "../models/INote";

export interface INoteAction {
    type: string;
    note: INote;
}

export const CREATE_NOTE = "create note";
export function createNote(): INoteAction {
    return {
        type: CREATE_NOTE,
        note: {
            id: uuid.v4(),
            task: "New task"
        }
    };
}

export const UPDATE_NOTE = "update note";
export function updateNote(id: string, task: string): INoteAction {
    return {
        type: UPDATE_NOTE,
        note: {id, task}
    };
}

export const DELETE_NOTE = "delete note";
export function deleteNote(id: string): INoteAction {
    return {
        type: DELETE_NOTE,
        note: {id, task: ""}
    };
}